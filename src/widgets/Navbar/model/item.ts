import { RoutesPath } from "shared/config/routeConfig/routeConfig";

export interface INavbarItem {
  text: string;
  authOnly?: boolean;
  path: string
}

export const NavbarItemsList: INavbarItem[] = [
  {
    text: 'Контакты',
    path: RoutesPath.contacts,
    authOnly: false
  },
  {
    text: 'Услуги',
    path: RoutesPath.contacts,
    authOnly: false
  },
]
