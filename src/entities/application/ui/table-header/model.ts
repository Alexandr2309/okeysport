import { SortKey } from 'entities/application';

type TableHeaderItem = {
  id: string;
  value: SortKey;
  label: string;
  sortable: boolean;
};
export const tableHeaders: TableHeaderItem[] = [
  {
    id: '1',
    label: 'Дата',
    value: 'date',
    sortable: false,
  },
  {
    id: '2',
    label: 'ID \n' + 'пользователя',
    value: 'id',
    sortable: true,
  },
  {
    id: '3',
    label: 'Имя \n' + 'пользователя',
    value: 'name',
    sortable: false,
  },
  {
    id: '4',
    label: 'Номер \n' + 'телефона',
    value: 'phone',
    sortable: false,
  },
  {
    id: '5',
    label: 'Электронная \n' + 'почта',
    value: 'email',
    sortable: false,
  },
  {
    id: '6',
    label: 'Тип мероприятия',
    value: 'type',
    sortable: false,
  },
  {
    id: '7',
    label: 'Комментарий',
    value: 'comment',
    sortable: false,
  },
];
