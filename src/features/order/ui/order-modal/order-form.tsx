import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  getComment,
  getEmail,
  getEventType,
  getName,
  getPhone,
  orderActions,
  orderReducer,
} from 'entities/order';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { EventsSelect, TypeEvents } from 'entities/events';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { SendOrder } from 'features/send-order';
import cls from './styles.module.scss';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import { Text } from 'shared/ui/Text/Text';

export interface OrderFormProps {
  className?: string;
}

const reducers: ReducerList = {
  order: orderReducer,
};

const OrderForm = (props: OrderFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const phone = useSelector(getPhone);
  const comment = useSelector(getComment);
  const eventType = useSelector(getEventType);

  const onChangeName = useCallback(
    (value: string) => {
      dispatch(orderActions.setName(value));
    },
    [dispatch]
  );

  const onChangePhone = useCallback(
    (value: string) => {
      dispatch(orderActions.setPhone(value));
    },
    [dispatch]
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(orderActions.setEmail(value));
    },
    [dispatch]
  );

  const onChangeComment = useCallback(
    (value: string) => {
      dispatch(orderActions.setComment(value));
    },
    [dispatch]
  );

  const onChangeType = useCallback(
    (value: TypeEvents) => {
      dispatch(orderActions.setType(value));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <form className={classNames(cls.OrderForm, {}, [className])}>
        <OrderFormHeader />
        <div className={cls.formContent}>
          <Input
            type='text'
            value={name}
            className={cls.inp}
            onChange={onChangeName}
            placeholder={t('Имя')}
          />
          <Input
            type='text'
            value={phone}
            className={cls.inp}
            onChange={onChangePhone}
            placeholder={t('Номер телефона')}
          />
          <Input
            type='text'
            value={email}
            className={cls.inp}
            onChange={onChangeEmail}
            placeholder={t('Электронная почта')}
          />
          <EventsSelect
            value={eventType}
            className={cls.select}
            onChange={onChangeType}
          />
          <TextArea
            value={comment}
            className={cls.textarea}
            onChange={onChangeComment}
            placeholder={t('Комментарий')}
          />
        </div>
        <SendOrder className={cls.send}>{t('Оставить заявку')}</SendOrder>
      </form>
    </DynamicModuleLoader>
  );
};

export default memo(OrderForm);

export function OrderFormHeader() {
  const { t } = useTranslation();

  return (
    <Text
      title={t('Заявка на участие в спортивном мероприятии')}
      text={t(
        'Отправьте запрос на участие или проведение спортивного мероприятия для вашей команды и мы обязательно свяжемся с вами в ближайшее время.'
      )}
      className={cls.header}
    />
  );
}
