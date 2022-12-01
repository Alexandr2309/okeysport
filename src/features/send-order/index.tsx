import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './styles.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { sendOrder } from 'features/order/model/services/sendOrder';

export interface ISendOrderProps {
  className?: string;
  children: ReactNode;
}

export const SendOrder = (props: ISendOrderProps) => {
  const { className, children } = props;
  const dispatch = useAppDispatch();

  const onSendOrder = useCallback(() => {
    dispatch(sendOrder());
  }, [dispatch]);

  return (
    <Button
      onClick={onSendOrder}
      className={classNames(cls.root, {}, [className])}
    >
      {children}
    </Button>
  );
};
