import { classNames } from 'shared/lib/classNames/classNames';
import type { ButtonHTMLAttributes, FC, HTMLProps } from 'react';
import React from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  DEFAULT = ''
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  type?: 'button' | 'reset' | 'submit'
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ThemeButton.DEFAULT,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};
