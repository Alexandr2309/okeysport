import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface IAppTableItemProps {
  className?: string;
  value: string;
}

export const AppTableItem = ({ className, value }: IAppTableItemProps) => {
  return <td className={classNames(cls.item, {}, [className])}>{value}</td>;
};
