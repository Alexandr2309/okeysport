import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect, useState } from 'react';
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
import { Button as ButtonAntd, message, Tooltip } from 'antd';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { authUserByEmail } from '../../model/services/authByEmail';
import cls from './AuthForm.module.scss';
import {
  getAuthEmail,
  getAuthErrors,
  getAuthPassword,
} from '../../model/selectors/getAuthData';
import { Modal } from 'shared/ui/Modal/Modal';
import { Result, ResultStatus } from 'shared/ui/Result';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { OpenOrderModal } from 'widgets/order';

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
  const [msgApi, ctxHolder] = message.useMessage();
  const [isSuccessAuth, setIsSuccessAuth] = useState(false);
  const na = useNavigate();
  const dispatch = useAppDispatch();
  const email = useSelector(getAuthEmail);
  const password = useSelector(getAuthPassword);
  const errors = useSelector(getAuthErrors);

  useEffect(() => {
    if (errors.noData) {
      return msgApi.open({
        type: 'warning',
        content: t('Необходимо заполнить все поля!'),
      });
    }
    if (errors.server) {
      return msgApi.open({
        type: 'error',
        content: t('Ошибка сервера. Повторите попытку позже'),
      });
    }
    if (errors.notFond) {
      return msgApi.open({
        type: 'error',
        duration: 4,
        content: t('Пользователь с такими данными не найден'),
      });
    }
  }, [errors.noData, errors.notFond, errors.server, msgApi, t]);

  const onButtonClick = useCallback(async () => {
    const response = await dispatch(authUserByEmail({ email, password }));
    if (response.meta.requestStatus === 'fulfilled') {
      // @ts-ignore
      if (response?.payload?.role === 'ADMIN') {
        onSuccess?.();
      } else {
        setIsSuccessAuth(true);
      }
    }
  }, [dispatch, email, onSuccess, password]);

  const onBackToMain = useCallback(() => {
    onSuccess?.();
    na(RoutesPath.main);
  }, [na, onSuccess]);

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
      {ctxHolder}
      <div className={classNames(cls.authForm, {}, [className])}>
        <Text title={t('Войти в личный кабинет')} className={cls.title} />
        <Tooltip
          title={t('Email указан неверно!')}
          open={errors.email}
          color='red'
          placement='right'
        >
          <Input
            placeholder={t('Email')}
            className={cls.input}
            inputClassName={cls.inputField}
            placeholderClassName={cls.placeholder}
            value={email}
            onChange={onChangeEmail}
          />
        </Tooltip>
        <Tooltip
          title={t('Минимальная длина пароля - 6 символов!')}
          open={errors.password}
          color='red'
          placement='right'
        >
          <Input
            placeholder={t('Пароль')}
            className={cls.input}
            inputClassName={cls.inputField}
            placeholderClassName={cls.placeholder}
            value={password}
            onChange={onChangePassword}
          />
        </Tooltip>
        <div className={cls.footer}>
          <AppLink to='/register' className={cls.register}>
            {t('Регистрация')}
          </AppLink>
          <Button onClick={onButtonClick} className={cls.btn}>
            {t('Войти')}
          </Button>
        </div>
      </div>
      {isSuccessAuth && (
        <Modal isOpen={isSuccessAuth}>
          <div className={cls.resultWrapper}>
            <Result
              status={ResultStatus.SUCCESS}
              title={t('Авторизация прошла успешно!')}
              subtitle={t(
                'Теперь вы можете оставить заявку или вернуть к просмотру сайта'
              )}
            >
              <OpenOrderModal className={cls.btnOrder}>
                {t('Оставить заявку')}
              </OpenOrderModal>
              <ButtonAntd key={'return'} onClick={onBackToMain}>
                {t('Вернуться на главную')}
              </ButtonAntd>
            </Result>
          </div>
        </Modal>
      )}
    </DynamicModuleLoader>
  );
});

export default authForm;
