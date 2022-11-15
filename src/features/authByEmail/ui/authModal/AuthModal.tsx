import { classNames } from 'shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { AuthFormAsync } from '../authForm/AuthForm.async';

export interface authModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = memo((props: authModalProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <AuthFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
});
