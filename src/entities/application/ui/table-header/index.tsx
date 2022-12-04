import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { tableHeaders } from './model';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { SortOrder } from 'entities/application';

export interface IAppTableHeaderProps {
  className?: string;
  setSortKey: (key: string) => void;
  currentKey: string;
  sortOrder: Dispatch<SetStateAction<SortOrder>>;
}

export const AppTableHeader = (props: IAppTableHeaderProps) => {
  const { className, sortOrder, setSortKey, currentKey } = props;

  const onChangeSortOrder = useCallback(
    (key: string) => () => {
      if (currentKey !== key) {
        sortOrder('asc');
      } else {
        sortOrder((order) => (order === 'asc' ? 'desc' : 'asc'));
      }

      setSortKey(key);
    },
    [currentKey, setSortKey, sortOrder]
  );

  return (
    <thead className={classNames(cls.index, {}, [className])}>
      <tr>
        {tableHeaders.map((header) => (
          <th key={header.id} onClick={onChangeSortOrder(header.value)}>
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
