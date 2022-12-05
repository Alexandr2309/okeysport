import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  registerUserByEmail,
  IRegisterUserByEmailProps,
} from '../../model/services/registerUserByEmail/registerUserByEmail';
import { message } from 'antd';
import { AuthModal } from 'features/authByEmail';

export interface ISendRegisterProps {
  className?: string;
  data: IRegisterUserByEmailProps;
}

export const SendRegister = ({ className, data }: ISendRegisterProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [openAuth, setOpenAuth] = useState(false);
  const [msgApi, ctxHolder] = message.useMessage();

  const onCloseModal = useCallback(() => {
    setOpenAuth(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setOpenAuth(true);
  }, []);

  const onRegisterHandler = useCallback(
    async (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const response = await dispatch(registerUserByEmail(data));
      if (response.meta.requestStatus === 'fulfilled') {
        msgApi.open({
          duration: 2,
          type: 'success',
          content: t(
            'Регистрация прошла успешно! Для продолжения войдите в аккаунт'
          ),
          onClose: onOpenModal,
        });
      }
    },
    [data, dispatch, msgApi, onOpenModal, t]
  );

  return (
    <div className={classNames(cls.root, {}, [className])}>
      {ctxHolder}
      <Button className={cls.btnReg} type='submit' onClick={onRegisterHandler}>
        {t('Зарегистрироваться')}
      </Button>
      {openAuth && <AuthModal isOpen={openAuth} onClose={onCloseModal} />}
    </div>
  );
};
