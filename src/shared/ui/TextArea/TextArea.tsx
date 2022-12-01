import cls from './TextArea.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, HTMLAttributes, memo } from 'react';

export interface TextAreaProps
  extends Omit<
    HTMLAttributes<HTMLTextAreaElement>,
    'onChange' | 'value' | 'readOnly'
  > {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const TextArea = memo((props: TextAreaProps) => {
  const { className, placeholder, onChange, value } = props;

  const onChangeHandler = (e: ChangeEvent) => {
    // @ts-ignore
    onChange?.(e.target.value || '');
  };

  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      className={classNames(cls.TextArea, {}, [className])}
    ></textarea>
  );
});

TextArea.displayName = 'TextArea';
