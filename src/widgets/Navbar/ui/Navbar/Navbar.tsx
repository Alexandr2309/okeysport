/**
 * Created by Саня on 26.09.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import NavbarItem from 'widgets/Navbar/ui/NavbarItem/NavbarItem';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import LogoIcon from 'shared/assets/icons/logo.svg';
import LogoutIcon from 'shared/assets/icons/logout.svg';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { Container } from 'app/providers/Layout';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { AuthModal } from 'features/authByEmail';
import { NavbarItemsList } from '../../model/item';
import cls from './Navbar.module.scss';
import { IUseMatchMediaResult } from 'shared/lib/hooks/use-match-media';
import BurgerIcon from 'shared/assets/icons/burger.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userActions } from 'entities/User/model/slice/userSlice';
import { useLocation } from 'react-router-dom';
import { Popconfirm } from 'antd';

type INavbarProps = {
  className?: string;
  media: IUseMatchMediaResult;
};

export const Navbar = ({ className, media }: INavbarProps) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { pathname } = useLocation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const { isMobile, isLaptop } = media;

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    setIsCollapsed(false);
  }, [pathname]);

  const onShowBurgerContent = useCallback(() => {
    setIsCollapsed(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsCollapsed(false);
  }, [dispatch]);

  const onCloseBurgerContent = useCallback(() => {
    setIsCollapsed(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const AuthBtn = useMemo(() => {
    return (
      <Button onClick={onShowModal} className={cls.loginBtn}>
        {t('Вход')}
      </Button>
    );
  }, [onShowModal, t]);

  const LogoutBtn = useMemo(() => {
    return (
      <>
        <Popconfirm
          title='Вы точно хотите выйти'
          open={open}
          onConfirm={onLogout}
          onCancel={onClose}
          placement='bottomLeft'
        >
          <Icon Svg={LogoutIcon} onClick={onOpen} />
        </Popconfirm>
        <Text text={authData?.username || ''} className={cls.username} />
      </>
    );
  }, [authData?.username, onClose, onLogout, onOpen, open]);

  return (
    <nav>
      <Container className={classNames(cls.Navbar, {}, [className])}>
        <AppLink to='/' className={cls.logo}>
          <LogoIcon />
          {!isMobile && (
            <Text title={t('OkeySport')} className={cls.logoText} />
          )}
        </AppLink>
        <div
          className={classNames(
            cls.burgerContent,
            { [cls.active]: isCollapsed },
            []
          )}
          onMouseLeave={onCloseBurgerContent}
        >
          <div className={cls.links}>
            {NavbarItemsList.map((link) => (
              <NavbarItem key={link.path} item={link} />
            ))}
          </div>
          <div className={cls.auth}>{authData ? LogoutBtn : AuthBtn}</div>
        </div>
        {isLaptop && (
          <div onClick={onShowBurgerContent}>
            <Icon Svg={BurgerIcon} />
          </div>
        )}
      </Container>
      {isAuthModal && <AuthModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </nav>
  );
};
