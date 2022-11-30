import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './styles.module.scss';

export interface ISendOrderProps {
  className?: string;
  children: ReactNode;
}

const SendOrder = (props: ISendOrderProps) => {
  const { className, children } = props;

  return (
    <Button className={classNames(cls.SendOrder, {}, [])}>
      {children}
    </Button>
  );
};
