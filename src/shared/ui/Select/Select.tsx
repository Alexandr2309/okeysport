import cls from './Select.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import Chevron from 'shared/ui/Select/chevron_select.svg';
import { Icon } from 'shared/ui/Icon/Icon';

export interface ISelectOption<T extends string> {
  value?: T;
  content?: string;
}

export interface SelectProps<T extends string> {
  options: ISelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  className?: string;
  label?: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, options, label, onChange, value } = props;

  const selectOptions = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} key={opt.value} value={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <select
      placeholder={label}
      onChange={onChangeHandler}
      value={value}
      className={classNames(cls.Select, {}, [className])}
    >
      {selectOptions}
    </select>
  );
};
