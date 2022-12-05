import { SortKey } from 'entities/application';

type TableHeaderItem = {
  id: string;
  value: SortKey;
  label: string;
};
export const tableHeaders: TableHeaderItem[] = [
  {
    id: '1',
    label: 'Дата',
    value: 'date',
  },
  {
    id: '2',
    label: 'ID \n' + 'пользователя',
    value: 'id',
  },
  {
    id: '3',
    label: 'Имя \n' + 'пользователя',
    value: 'name',
  },
  {
    id: '4',
    label: 'Номер \n' + 'телефона',
    value: 'phone',
  },
  {
    id: '5',
    label: 'Электронная \n' + 'почта',
    value: 'email',
  },
  {
    id: '6',
    label: 'Тип мероприятия',
    value: 'type',
  },
  {
    id: '7',
    label: 'Комментарий',
    value: 'comment',
  },
];
