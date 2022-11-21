import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

export interface INavbarItem {
  text: string;
  authOnly?: boolean;
  path: string
}

export const NavbarItemsList: INavbarItem[] = [
  {
    text: 'О компании',
    path: RoutesPath.about,
    authOnly: false,
  },
  {
    text: 'Услуги',
    path: RoutesPath.services,
    authOnly: false,
  },
  {
    text: 'События',
    path: RoutesPath.news,
    authOnly: false,
  },
  {
    text: 'Контакты',
    path: RoutesPath.contacts,
    authOnly: false,
  },
];
