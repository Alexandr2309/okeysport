import React, { Suspense } from 'react';
import { AppRoutes, RoutesPath } from 'shared/config/routeConfig/routeConfig';
import type { RouteProps } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { PageLoader } from 'widgets/PageLoader';
import { ContactsPage } from 'pages/ContactsPage';
import { RegisterPage } from 'pages/RegisterPage';
import { AboutPage } from 'pages/AboutPage';
import { NewsPage } from 'pages/NewsPage';
import { ServicesPage } from 'pages/ServicesPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />,
  },
  [AppRoutes.CONTACTS]: {
    path: RoutesPath.contacts,
    element: <ContactsPage />,
  },
  [AppRoutes.SERVICES]: {
    path: RoutesPath.services,
    element: <ServicesPage />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutesPath.register,
    element: <RegisterPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NEWS]: {
    path: RoutesPath.news,
    element: <NewsPage />,
  },
};

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
              {element}
            </div>
          </Suspense>
        )}
      />
    ))}
  </Routes>
);
