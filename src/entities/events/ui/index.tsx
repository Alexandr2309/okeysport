import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { TypeEvents } from '../model';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

export interface IEventsSelectProps {
  className?: string;
  onChange: (value: TypeEvents) => void;
  value?: TypeEvents;
}

const options = [
  { value: TypeEvents.CHAMPIONSHIP, content: 'Чемпионат' },
  { value: TypeEvents.COMPETITION, content: 'Соревнование' },
  { value: TypeEvents.OLYMPICS, content: 'Спортакиада' },
  { value: TypeEvents.TOURNAMENT, content: 'Турнир' },
];

export const EventsSelect = ({
  className,
  value,
  onChange,
}: IEventsSelectProps) => {
  const { t } = useTranslation();
  const onChangeHandler = (value: string) => {
    onChange?.(value as TypeEvents);
  };

  return (
    <Select
      options={options}
      value={value}
      label={t('Желаемый тип мероприятия')}
      onChange={onChangeHandler}
      className={classNames(cls.index, {}, [className])}
    />
  );
};
