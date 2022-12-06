import React, { Suspense } from 'react';
import { AppRoutes, RoutesPath } from 'shared/config/routeConfig/routeConfig';
import type { RouteProps } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { PageLoader } from 'widgets/PageLoader';
import { ContactsPage } from 'pages/ContactsPage';
import { RegisterPage } from 'pages/RegisterPage';
import { AboutPage } from 'pages/AboutPage';
import { NewsPage } from 'pages/NewsPage';
import { ServicesPage } from 'pages/ServicesPage';
import { ApplicationsPage } from 'pages/RequestsPage';
import { NewsDetailsPage } from 'pages/NewsDetailsPage';
import { use } from 'i18next';
import { useSelector } from 'react-redux';
import { getUserRole } from 'entities/User';

type RoutePropsCustom = {
  isAuth: boolean;
} & RouteProps;

export const routeConfig: Record<AppRoutes, RoutePropsCustom> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />,
    isAuth: false,
  },
  [AppRoutes.CONTACTS]: {
    path: RoutesPath.contacts,
    element: <ContactsPage />,
    isAuth: false,
  },
  [AppRoutes.SERVICES]: {
    path: RoutesPath.services,
    element: <ServicesPage />,
    isAuth: false,
  },
  [AppRoutes.REGISTER]: {
    path: RoutesPath.register,
    element: <RegisterPage />,
    isAuth: false,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPath.about,
    element: <AboutPage />,
    isAuth: false,
  },
  [AppRoutes.NEWS]: {
    path: RoutesPath.news,
    element: <NewsPage />,
    isAuth: false,
  },
  [AppRoutes.NEWS_DETAILS]: {
    path: `${RoutesPath.news_details}:id`,
    element: <NewsDetailsPage />,
    isAuth: false,
  },
  [AppRoutes.APPLICATIONS]: {
    path: RoutesPath.applications,
    element: <ApplicationsPage />,
    isAuth: true,
  },
};

export const AppRouter = () => {
  const role = useSelector(getUserRole);

  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element, isAuth }) => (
        <Route
          key={path}
          path={path}
          element={
            <>
              {isAuth ? (
                role === 'ADMIN' ? (
                  <Suspense fallback={<PageLoader />}>
                    <div className='page-wrapper'>{element}</div>
                  </Suspense>
                ) : (
                  <Navigate to={RoutesPath.main} replace />
                )
              ) : (
                <Suspense fallback={<PageLoader />}>
                  <div className='page-wrapper'>{element}</div>
                </Suspense>
              )}
            </>
          }
        />
      ))}
    </Routes>
  );
};
