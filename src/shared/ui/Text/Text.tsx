import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { useTranslation } from 'react-i18next';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  BLACK = 'black',
}

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
}: TextProps) => {
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
