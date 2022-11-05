/**
 * Created by Саня on 26.09.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { NavbarItemsList } from "../../model/item";
import NavbarItem from "widgets/Navbar/ui/NavbarItem/NavbarItem";
import { AppLink } from "shared/ui/AppLink/AppLink";
import LogoIcon from 'shared/assets/icons/logo.svg';
import { Text } from 'shared/ui/Text/Text';

type INavbarProps = {
  className?: string;
};

export const Navbar = ( { className }: INavbarProps ) => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [ className ])}>
      <AppLink to={'/'} className={cls.logo}>
        <LogoIcon/>
        <Text
          title={t('OkeySport')}
        />
      </AppLink>
      <div className={cls.links}>
        {NavbarItemsList.map(( link ) => (
          <NavbarItem item={link}/>
        ))}
      </div>
      <Text
        title={t('Войти')}
      />
    </div>
  );
};
