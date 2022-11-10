import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Container.module.scss';

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({
  className,
  children,
}: ContainerProps) => (
  <div className={classNames(cls.Container, {}, [className])}>
    {children}
  </div>
);
