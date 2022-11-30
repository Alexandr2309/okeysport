import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import cls from './styles.module.scss';
import { OpenModal } from '../open-modal';

export interface SendOrderProps {
  className?: string;
}

export const CreateOrder = memo((props: SendOrderProps) => {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.SendOrder, {}, [className])}>
      <OpenModal onOpenModal={onOpenModal} />
    </div>
  );
});
