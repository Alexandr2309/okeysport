import { classNames } from 'shared/lib/classNames/classNames';
import { lazy, memo, Suspense } from 'react';
import cls from './styles.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';

export interface SendOrderProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const OrderForm = lazy(() => import('./order-form'));

export const OrderModal = memo((props: SendOrderProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      lazy
      onClose={onClose}
      className={classNames(cls.SendOrder, {}, [className, cls.form])}
    >
      <Suspense fallback={<Loader />}>
        <OrderForm />
      </Suspense>
    </Modal>
  );
});

OrderModal.displayName = 'OrderModal';
