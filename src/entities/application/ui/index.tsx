import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { getAppTableData, SortOrder } from '../model';
import { AppTableHeader } from './table-header';
import { useSelector } from 'react-redux';
import { AppTableRow } from './table-row';

export interface IApplicationTableProps {
  className?: string;
}

export const ApplicationTable = ({ className }: IApplicationTableProps) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortKey, setSortKey] = useState<string>('id');
  const applicationsData = useSelector(getAppTableData);

  return (
    <table className={classNames(cls.root, {}, [className])}>
      <AppTableHeader
        setSortKey={setSortKey}
        currentKey={sortKey}
        sortOrder={setSortOrder}
      />
      <tbody>
        {applicationsData?.map((application) => (
          <AppTableRow application={application} key={application.id} />
        ))}
      </tbody>
    </table>
  );
};
