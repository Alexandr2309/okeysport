import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { aboutCard, ICard } from 'shared/const/page';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import cls from './AboutCard.module.scss';

export interface AboutCardProps {
  className?: string;
}

export const AboutCard = memo((props: AboutCardProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const renderCard = useCallback((card: ICard) => (
    <Card
      className={cls.card}
      key={card.id}
    >
      <Text
        className={cls.num}
        title={card.num}
      />
      <Text
        className={cls.title}
        text={card.title}
      />
      <Text
        className={cls.subtitle}
        text={card.subtitle}
      />
    </Card>
  ), []);

  return (
    <section>
      <Text
        title={t('Мы - это:')}
        className={cls.sectionTitle}
      />
      <ul className={classNames(cls.AboutCard, {}, [className])}>
        {aboutCard.map(renderCard)}
      </ul>
    </section>
  );
});
