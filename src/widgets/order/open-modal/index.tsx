import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './OpenModal.module.scss';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { AuthModal } from 'features/authByEmail';
import { OrderModal } from 'features/order';
import { Header } from './header';

export interface OpenModalProps {
  className?: string;
  withText?: boolean;
  children: ReactNode;
}

export const OpenOrderModal = memo((props: OpenModalProps) => {
  const { className, withText = false, children } = props;
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const { t } = useTranslation();
  const auth = useSelector(getUserAuthData);

  const onCloseAuthModal = useCallback(() => {
    setAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpenOrder(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenOrder(false);
  }, []);

  const onClickHandler = useCallback(() => {
    if (!auth) return setAuthModal(true);

    onOpenModal?.();
  }, [auth, onOpenModal]);

  return (
    <div className={classNames(cls.OpenModal, {}, [className])}>
      {withText && <Header />}
      <Button className={cls.button} onClick={onClickHandler}>
        {children}
      </Button>
      {isOpenOrder && (
        <OrderModal isOpen={isOpenOrder} onClose={onCloseModal} />
      )}
      {authModal && <AuthModal isOpen={authModal} onClose={onCloseAuthModal} />}
    </div>
  );
});
