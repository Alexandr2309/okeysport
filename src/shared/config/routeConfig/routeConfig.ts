export enum AppRoutes {
  MAIN = 'main',
  CONTACTS = 'contacts',
  SERVICES = 'services',
  REGISTER = 'register',
  ABOUT = 'about',
  NEWS = 'news',
  REQUESTS = 'requests',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CONTACTS]: '/contacts',
  [AppRoutes.SERVICES]: '/services',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NEWS]: '/news',
  [AppRoutes.REQUESTS]: '/requests',
};
