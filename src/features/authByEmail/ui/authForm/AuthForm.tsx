import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MouseEvent, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { authFormReducer } from 'features/authByEmail/model/slices/authSlice';
import { Button } from 'shared/ui/Button/Button';
import cls from './AuthForm.module.scss';

export interface authFormProps {
  className?: string;
}

const reducers: ReducerList = {
  authForm: authFormReducer,
};

const authForm = memo((props: authFormProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const onButtonClick = useCallback(() => {

  }, []);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.authForm, {}, [className])}>
        <Text title={t('Войти')} />
        <Input
          placeholder={t('Email')}
          className={cls.input}
          inputClassName={cls.inputField}
          placeholderClassName={cls.placeholder}
        />
        <Input
          placeholder={t('Пароль')}
          className={cls.input}
          inputClassName={cls.inputField}
          placeholderClassName={cls.placeholder}
        />
        <Button onClick={onButtonClick} className={cls.btn}>
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default authForm;
