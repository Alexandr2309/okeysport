import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { IApplication } from '../../model';
import { AppTableItem } from 'entities/application/ui/table-row/app-table-item';

export interface indexProps {
  className?: string;
  application: IApplication;
}

export const AppTableRow = ({ className, application }: indexProps) => {
  return (
    <tr className={classNames(cls.row, {}, [className])}>
      {Object.values(application).map((item) => (
        <AppTableItem value={item} key={item} />
      ))}
    </tr>
  );
};
