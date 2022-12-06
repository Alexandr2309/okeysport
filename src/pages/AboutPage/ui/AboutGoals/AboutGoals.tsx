import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { aboutGoals } from 'shared/const/page';
import { IAboutGoal } from 'shared/const/page/aboutPage/model';
import cls from './AboutGoals.module.scss';

export interface AboutGoalsProps {
  className?: string;
}

export const AboutGoals = memo((props: AboutGoalsProps) => {
  const { className } = props;
  const { t } = useTranslation('about');

  const renderGoalItem = useCallback(
    (goal: IAboutGoal) => (
      <li className={cls.point} key={goal.id}>
        {t(goal.text)}
      </li>
    ),
    []
  );

  return (
    <>
      <Text title={t('Наши цели')} className={cls.title} />
      <ul className={classNames(cls.AboutGoals, {}, [className])}>
        {aboutGoals.map(renderGoalItem)}
      </ul>
    </>
  );
});
