import { classNames } from 'shared/lib/classNames/classNames';
import React, { HTMLProps, InputHTMLAttributes, useCallback } from 'react';
import cls from './Input.module.scss';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
  readonly?: boolean;
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const {
    className,
    placeholder,
    readonly,
    onChange,
    value,
    type,
    ...otherProps
  } = props;

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, []);

  const mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {placeholder}
        </div>
      )}
      <div>
        <input
          className={cls.input}
          type={type}
          onChange={onChangeHandler}
          value={value}
          readOnly={readonly}
          {...otherProps}
        />
      </div>
    </div>
  );
};
