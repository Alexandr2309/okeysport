import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MouseEvent, useCallback, useState } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';
import {
  authFormActions,
  authFormReducer,
} from 'features/authByEmail/model/slices/authSlice';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { authUserByEmail } from 'features/authByEmail/model/services/authByEmail';
import cls from './AuthForm.module.scss';
import {
  getAuthEmail,
  getAuthPassword,
} from '../../model/selectors/getAuthData';

export interface authFormProps {
  className?: string;
  onSuccess?: () => void;
}

const reducers: ReducerList = {
  authForm: authFormReducer,
};

const authForm = memo((props: authFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const email = useSelector(getAuthEmail);
  const password = useSelector(getAuthPassword);

  const onButtonClick = useCallback(async () => {
    const response = await dispatch(authUserByEmail({ email, password }));
    if (response.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, email, onSuccess, password]);

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(authFormActions.setPassword(value));
    },
    [dispatch]
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(authFormActions.setEmail(value));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.authForm, {}, [className])}>
        <Text title={t('Войти в личный кабинет')} className={cls.title} />
        <Input
          placeholder={t('Email')}
          className={cls.input}
          inputClassName={cls.inputField}
          placeholderClassName={cls.placeholder}
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          placeholder={t('Пароль')}
          className={cls.input}
          inputClassName={cls.inputField}
          placeholderClassName={cls.placeholder}
          value={password}
          onChange={onChangePassword}
        />
        <div className={cls.footer}>
          <AppLink to='/register' className={cls.register}>
            {t('Регистрация')}
          </AppLink>
          <Button onClick={onButtonClick} className={cls.btn}>
            {t('Войти')}
          </Button>
        </div>
      </div>
    </DynamicModuleLoader>
  );
});

export default authForm;
