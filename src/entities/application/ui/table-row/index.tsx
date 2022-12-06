import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { IApplication } from '../../model';
import { AppTableItem } from 'entities/application/ui/table-row/app-table-item';
import { useTranslation } from 'react-i18next';

export interface IAppTableRowProps {
  className?: string;
  application: IApplication;
}

export const AppTableRow = ({ className, application }: IAppTableRowProps) => {
  const { t } = useTranslation('requests');
  return (
    <tr className={classNames(cls.row, {}, [className])}>
      {Object.values(application).map((item) => (
        <AppTableItem value={t(item)} key={item} />
      ))}
    </tr>
  );
};
