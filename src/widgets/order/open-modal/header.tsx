import cls from './OpenModal.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

export interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Text
        className={cls.title}
        title={t('Заказать проведение спортивного мероприятия')}
      />
      <Text
        className={cls.text}
        title={t(
          'Выберите одно из готовых мероприятий или создайте собственный корпоративный чемпионат'
        )}
      />
    </>
  );
};
