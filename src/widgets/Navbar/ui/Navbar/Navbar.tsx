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
import { Container } from 'app/providers/Layout';
import { useCallback, useState } from 'react';
import { AuthModal } from 'features/authByEmail';
import { NavbarItemsList } from '../../model/item';
import cls from './Navbar.module.scss';
import { useMatchMedia } from 'shared/lib/hooks/use-match-media';

type INavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: INavbarProps) => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { isMobile } = useMatchMedia();

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  console.log(isMobile);

  return (
    <nav>
      <Container className={classNames(cls.Navbar, {}, [className])}>
        <AppLink to='/' className={cls.logo}>
          <LogoIcon />
          <Text title={t('OkeySport')} className={cls.logoText} />
        </AppLink>
        <div className={cls.links}>
          {NavbarItemsList.map((link) => (
            <NavbarItem key={link.path} item={link} />
          ))}
        </div>
        <div className={cls.auth}>
          {!isMobile && <UserIcon />}
          <Button onClick={onShowModal} className={cls.loginBtn}>
            {t('Вход')}
          </Button>
        </div>
      </Container>
      {isAuthModal && <AuthModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </nav>
  );
};
