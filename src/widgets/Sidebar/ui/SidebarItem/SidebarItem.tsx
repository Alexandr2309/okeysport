import cls from './SidebarItem.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ISidebarItem } from "../../model/item";
import { useTranslation } from "react-i18next";

export interface SidebarItemProps {
  collapsed: boolean;
  item: ISidebarItem;
}

export const SidebarItem = ( { item, collapsed }: SidebarItemProps ) => {
  const {t} = useTranslation();

  const mods = {
    [cls.collapsed]: collapsed
  };

  return (
    <AppLink
      className={classNames(cls.SidebarItem, mods, [])}
      to={item.path}
    >
    <item.Icon className={cls.icon}/>
      <span className={cls.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
};
