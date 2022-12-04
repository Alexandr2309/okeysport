type TableHeaderItem = {
  id: string;
  value: string;
  label: string;
};
export const tableHeaders: TableHeaderItem[] = [
  {
    id: '1',
    label: 'Дата',
    value: 'datetime',
  },
  {
    id: '2',
    label: 'ID \n' + 'пользователя',
    value: 'id',
  },
  {
    id: '3',
    label: 'Имя \n' + 'пользователя',
    value: 'username',
  },
  {
    id: '4',
    label: 'Номер \n' + 'телефона',
    value: 'phone_number',
  },
  {
    id: '5',
    label: 'Электронная \n' + 'почта',
    value: 'email',
  },
  {
    id: '6',
    label: 'Тип мероприятия',
    value: 'event_type',
  },
  {
    id: '7',
    label: 'Комментарий',
    value: 'comment',
  },
];
