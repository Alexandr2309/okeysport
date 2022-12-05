import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { getAppTableData, SortKey, SortOrder } from '../model';
import { AppTableHeader } from './table-header';
import { useSelector } from 'react-redux';
import { AppTableBody } from './table-body';
import { sortedData } from '../lib';

export interface IApplicationTableProps {
  className?: string;
}

export const ApplicationTable = ({ className }: IApplicationTableProps) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortKey, setSortKey] = useState<SortKey>('id');
  const applicationsData = useSelector(getAppTableData);

  const sortData = useCallback(() => {
    return sortedData({
      currentData: applicationsData,
      sortKey,
      reverse: sortOrder === 'desc',
    });
  }, [applicationsData, sortKey, sortOrder]);

  return (
    <table className={classNames(cls.root, {}, [className])}>
      <AppTableHeader
        setSortKey={setSortKey}
        currentKey={sortKey}
        sortOrder={setSortOrder}
        order={sortOrder}
      />
      <AppTableBody sortData={sortData} />
    </table>
  );
};
