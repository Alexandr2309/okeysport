import cls from './Input.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useCallback } from 'react';

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
  > {
  readonly?: boolean;
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  inputClassName?: string;
  placeholderClassName?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    placeholder,
    readonly,
    onChange,
    inputClassName,
    placeholderClassName,
    value,
    type,
    ...otherProps
  } = props;

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      <input
        className={classNames(cls.input, mods, [inputClassName])}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});

Input.displayName = 'Input';
