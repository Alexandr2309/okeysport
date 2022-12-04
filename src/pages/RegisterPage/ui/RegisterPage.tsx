import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Container } from 'app/providers/Layout';
import { Button } from 'shared/ui/Button/Button';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import {
  getRegisterEmail,
  getRegisterError,
  getRegisterIsLoading,
  getRegisterPassword,
  getRegisterUsername,
  getRegisterVerifiedPassword,
} from 'features/registerByEmail/model/selectors/getRegisterData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  registerActions,
  registerReducer,
} from 'features/registerByEmail/model/slices/registerSlice';
import cls from './RegisterPage.module.scss';

export interface RegisterPageProps {
  className?: string;
}

const reducers: ReducerList = {
  register: registerReducer,
};

const RegisterPage = memo(({ className }: RegisterPageProps) => {
  const { t } = useTranslation('register');
  const dispatch = useAppDispatch();

  const username = useSelector(getRegisterUsername);
  const password = useSelector(getRegisterPassword);
  const verifiedPassword = useSelector(getRegisterVerifiedPassword);
  const email = useSelector(getRegisterEmail);
  const isLoading = useSelector(getRegisterIsLoading);
  const error = useSelector(getRegisterError);

  // const onRegisterHandler = useCallback((e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   dispatch(registerUserByEmail({ username, password, email }));
  // }, [dispatch, email, password, username]);

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
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.RegisterPage, {}, [className])}>
        <Container>
          <form action='#' className={cls.form}>
            <h1 className={cls.title}>{t('Регистрация')}</h1>
            <Input
              placeholder={`${t('Имя пользователя')}:`}
              inputClassName={cls.input}
              className={cls.inputBlock}
              placeholderClassName={cls.placeholder}
              value={username}
              onChange={onChangeUsername}
            />
            <Input
              placeholder={`${t('Email')}:*`}
              inputClassName={cls.input}
              className={cls.inputBlock}
              placeholderClassName={cls.placeholder}
              value={email}
              onChange={onChangeEmail}
            />
            <Input
              placeholder={`${t('Пароль')}:*`}
              inputClassName={cls.input}
              className={cls.inputBlock}
              placeholderClassName={cls.placeholder}
              value={password}
              onChange={onChangePassword}
              type='password'
            />
            <Input
              placeholder={`${t('Подтвердите пароль')}:*`}
              inputClassName={cls.input}
              className={cls.inputBlock}
              placeholderClassName={cls.placeholder}
              value={verifiedPassword}
              onChange={onChangeVerifiedPassword}
              type='password'
            />
            {/* <div className={cls.btn}> */}
            {/*   <Button */}
            {/*     className={cls.btnReg} */}
            {/*     type="submit" */}
            {/*     onClick={onRegisterHandler} */}
            {/*   > */}
            {/*     {t('Зарегистрироваться')} */}
            {/*   </Button> */}
            {/* </div> */}
          </form>
        </Container>
      </div>
    </DynamicModuleLoader>
  );
});

export default RegisterPage;
