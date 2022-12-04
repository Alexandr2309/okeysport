export enum AppRoutes {
  MAIN = 'main',
  CONTACTS = 'contacts',
  SERVICES = 'services',
  REGISTER = 'register',
  ABOUT = 'about',
  NEWS = 'news',
  NEWS_DETAILS = 'news_details',
  APPLICATIONS = 'applications',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CONTACTS]: '/contacts',
  [AppRoutes.SERVICES]: '/services',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NEWS]: '/news',
  [AppRoutes.NEWS_DETAILS]: '/news/',
  [AppRoutes.APPLICATIONS]: '/applications',
};
