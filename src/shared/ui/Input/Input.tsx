import cls from './Input.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
  ForwardedRef,
  InputHTMLAttributes,
  memo,
  useCallback,
} from 'react';

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

export const Input = React.forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
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
          ref={ref}
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
  }
);

Input.displayName = 'Input';
