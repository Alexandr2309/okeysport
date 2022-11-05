export enum AppRoutes {
  MAIN = 'main',
  CONTACTS = 'contacts',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CONTACTS]: '/contacts',
};
