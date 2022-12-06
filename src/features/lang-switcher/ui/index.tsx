import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from 'antd';

export interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleChange = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <button
      onClick={toggleChange}
      className={classNames(cls.root, {}, [className])}
    >
      {t('Язык')}
    </button>
  );
});
