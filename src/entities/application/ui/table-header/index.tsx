import cls from './styles.module.scss';
import ChevronDown from 'shared/assets/icons/chevron_down.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { tableHeaders } from './model';
import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { SortKey, SortOrder } from '../../model';
import { Icon } from 'shared/ui/Icon/Icon';

export interface IAppTableHeaderProps {
  className?: string;
  setSortKey: (key: SortKey) => void;
  currentKey: string;
  order: SortOrder;
  sortOrder: Dispatch<SetStateAction<SortOrder>>;
}

export const AppTableHeader = (props: IAppTableHeaderProps) => {
  const { className, sortOrder, setSortKey, currentKey, order } = props;

  const onChangeSortOrder = useCallback(
    (key: SortKey) => () => {
      if (currentKey !== key) {
        sortOrder('asc');
      } else {
        sortOrder((order) => (order === 'asc' ? 'desc' : 'asc'));
      }

      setSortKey(key);
    },
    [currentKey, setSortKey, sortOrder]
  );

  const AppHeaderSortIcon = useCallback(
    ({ header }: { header: typeof tableHeaders[0] }) => {
      return (
        <span
          className={classNames(
            cls.icon,
            {
              [cls.active]: currentKey === header.value && order === 'desc',
            },
            []
          )}
        >
          <Icon Svg={ChevronDown} />
        </span>
      );
    },
    [currentKey, order]
  );

  return (
    <thead className={classNames(cls.root, {}, [className])}>
      <tr className={cls.row}>
        {tableHeaders.map((header) => (
          <th
            className={cls.head}
            key={header.id}
            onClick={onChangeSortOrder(header.value)}
          >
            {header.label}
            {header.sortable && <AppHeaderSortIcon header={header} />}
          </th>
        ))}
      </tr>
    </thead>
  );
};
