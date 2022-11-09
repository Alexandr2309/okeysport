/**
 * Created by Саня on 26.09.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import NavbarItem from 'widgets/Navbar/ui/NavbarItem/NavbarItem';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import LogoIcon from 'shared/assets/icons/logo.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { NavbarItemsList } from '../../model/item';
import cls from './Navbar.module.scss';

type INavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: INavbarProps) => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <AppLink to="/" className={cls.logo}>
        <LogoIcon />
        <Text
          title={t('OkeySport')}
          className={cls.logoText}
        />
      </AppLink>
      <div className={cls.links}>
        {NavbarItemsList.map((link) => (
          <NavbarItem item={link} />
        ))}
      </div>
      <Button className={cls.auth} theme={ThemeButton.CLEAR}>
        <UserIcon />
        <Text
          text={t('Вход')}
          theme={TextTheme.BLACK}
        />
      </Button>
      <Button
        className={cls.callBtn}
      >
        {t('Связаться с нами')}
      </Button>
    </nav>
  );
};
