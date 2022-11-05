import { classNames } from 'shared/lib/classNames/classNames';
import type { FC, HTMLProps } from 'react';
import React from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

export type IButtonProps = {
  className?: string;
  theme?: string;
  type?: 'button' | 'reset' | 'submit'
} & HTMLProps<HTMLButtonElement>;

export const Button: FC<IButtonProps> = ( props ) => {
  const {
    className,
    children,
    theme,
    type = 'button',
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      type={type}
      className={classNames(cls.Button, {}, [ className, cls[ theme ] ])}
    >
      {children}
    </button>
  );
};
