import React, { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { INavbarItem } from '../../model/item';
import cls from './NavbarItem.module.scss';

interface INavbarItemProps {
  item: INavbarItem
}

const NavbarItem = ({ item }: INavbarItemProps) => {
  const { t } = useTranslation();
  const auth = true;

  if (item.authOnly && !auth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      className={cls.link}
    >
      {t(item.text)}
    </AppLink>
  );
};

export default memo(NavbarItem);
