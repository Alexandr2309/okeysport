import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { ISidebarItem } from '../../model/item';
import cls from './SidebarItem.module.scss';

export interface SidebarItemProps {
  collapsed: boolean;
  item: ISidebarItem;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const mods = {
    [cls.collapsed]: collapsed,
  };

  return (
    <AppLink
      className={classNames(cls.SidebarItem, mods, [])}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
};
