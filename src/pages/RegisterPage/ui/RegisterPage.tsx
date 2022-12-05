import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useEffect } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Container } from 'app/providers/Layout';
import { message, Spin, Tooltip } from 'antd';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import {
  getRegisterEmail,
  getRegisterIsLoading,
  getRegisterPassword,
  getRegisterUsername,
  getRegisterVerifiedPassword,
  getValidateErrorsByType,
  registerActions,
  registerReducer,
  SendRegister,
} from 'features/registerByEmail';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './RegisterPage.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';

export interface RegisterPageProps {
  className?: string;
}

const reducers: ReducerList = {
  register: registerReducer,
};

const RegisterPage = memo(({ className }: RegisterPageProps) => {
  const { t } = useTranslation('register');
  const dispatch = useAppDispatch();
  const [msgApi, ctxHolder] = message.useMessage();
  const username = useSelector(getRegisterUsername);
  const password = useSelector(getRegisterPassword);
  const verifiedPassword = useSelector(getRegisterVerifiedPassword);
  const email = useSelector(getRegisterEmail);

  const isLoading = useSelector(getRegisterIsLoading);
  const errors = useSelector(getValidateErrorsByType);

  useEffect(() => {
    if (errors.server) {
      msgApi.open({
        type: 'error',
        content: t('Ошибка сервера. Повторите попытку позже'),
      });
    }
    if (errors.noData) {
      msgApi.open({
        type: 'warning',
        content: t('Необходимо заполнить все поля!'),
      });
    }
  }, [errors.noData, errors.server, msgApi, t]);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(registerActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(registerActions.setPassword(value));
    },
    [dispatch]
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(registerActions.setEmail(value));
    },
    [dispatch]
  );

  const onChangeVerifiedPassword = useCallback(
    (value: string) => {
      dispatch(registerActions.setVerifiedPassword(value));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {ctxHolder}
      <Modal isOpen={isLoading}>
        <Spin indicator={<Loader />} />
      </Modal>
      <div className={classNames(cls.RegisterPage, {}, [className])}>
        <Container>
          <form action='#' className={cls.form}>
            <h1 className={cls.title}>{t('Регистрация')}</h1>
            <Tooltip
              title={t('Поле заполнено неверно!')}
              open={errors.username}
              color='red'
              placement='topRight'
            >
              <Input
                placeholder={`${t('Имя пользователя')}:`}
                inputClassName={classNames(
                  cls.input,
                  { [cls.error]: errors.username },
                  []
                )}
                className={cls.inputBlock}
                placeholderClassName={cls.placeholder}
                value={username}
                onChange={onChangeUsername}
              />
            </Tooltip>
            <Tooltip
              title={t('Формат почты не действителен!')}
              open={errors.email}
              color='red'
              placement='topRight'
            >
              <Input
                placeholder={`${t('Email')}:*`}
                inputClassName={classNames(
                  cls.input,
                  { [cls.error]: errors.email },
                  []
                )}
                className={cls.inputBlock}
                placeholderClassName={cls.placeholder}
                value={email}
                onChange={onChangeEmail}
              />
            </Tooltip>
            <Tooltip
              title={t('Минимальная длина - 6 символов!')}
              open={errors.password}
              color='red'
              placement='topRight'
            >
              <Input
                placeholder={`${t('Пароль')}:*`}
                inputClassName={classNames(
                  cls.input,
                  { [cls.error]: errors.password },
                  []
                )}
                className={cls.inputBlock}
                placeholderClassName={cls.placeholder}
                value={password}
                onChange={onChangePassword}
                type='password'
              />
            </Tooltip>
            <Tooltip
              title={t('Пароли не совпадают!')}
              open={errors.verifiedPassword}
              color='red'
              placement='topRight'
            >
              <Input
                placeholder={`${t('Подтвердите пароль')}:*`}
                inputClassName={classNames(
                  cls.input,
                  { [cls.error]: errors.verifiedPassword },
                  []
                )}
                className={cls.inputBlock}
                placeholderClassName={cls.placeholder}
                value={verifiedPassword}
                onChange={onChangeVerifiedPassword}
                type='password'
              />
            </Tooltip>
            <SendRegister
              data={{ username, email, password, verifiedPassword }}
              className={cls.btn}
            />
          </form>
        </Container>
      </div>
    </DynamicModuleLoader>
  );
});

export default RegisterPage;
