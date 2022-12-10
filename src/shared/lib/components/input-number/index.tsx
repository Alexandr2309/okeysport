import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input, InputProps } from 'shared/ui/Input/Input';
import { Tooltip } from 'antd';
import React, {
  createRef,
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { TooltipProps } from 'antd/es/tooltip';
import { formatPhoneNumber } from 'shared/lib/number';
import { PHONE_REGEXP } from 'shared/const/reg-exp';

export type IPhoneNumberInputProps = {
  className?: string;
} & TooltipProps &
  InputProps;
// `${t('Email')}:*`
// classNames(
//   cls.input,
//   { [cls.error]: errors.email },
//   []
// )
// title={title}
// open={errors.email}
// color='red'
// placement={placement}

export const PhoneNumberInput = (props: IPhoneNumberInputProps) => {
  const {
    className,
    placement,
    placeholder,
    inputClassName,
    value,
    onChange,
    ...otherProps
  } = props;

  const inputRef = useRef() as RefObject<HTMLInputElement>;

  const onChangeHandler = useCallback(() => {
    if (inputRef) {
      const formattedPhone = formatPhoneNumber(
        inputRef,
        inputRef.current!.value
      );

      // if (!PHONE_REGEXP.test('+' + formattedPhone.replace(/\D/g, ''))) {
      onChange?.(formattedPhone);
      // }
    }
  }, [inputRef, onChange]);

  return (
    <Tooltip {...otherProps}>
      <Input
        type='tel'
        ref={inputRef}
        placeholder={placeholder}
        inputClassName={inputClassName}
        className={cls.inputBlock}
        placeholderClassName={cls.placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </Tooltip>
  );
};
