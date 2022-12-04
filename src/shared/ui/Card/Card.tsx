import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, HTMLProps, ReactNode } from 'react';
import cls from './Card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children, ...otherProps }: CardProps) => (
  <div {...otherProps} className={classNames(cls.Card, {}, [className])}>
    {children}
  </div>
);
