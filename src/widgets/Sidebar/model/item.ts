import React from "react";
import { RoutesPath } from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/home.svg';

export interface ISidebarItem {
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  path: string;
  text: string;
}

export const SidebarItemsList: ISidebarItem[] = [
  {
    path: RoutesPath.main,
    Icon: MainIcon,
    text: 'Главная',
  },
]
