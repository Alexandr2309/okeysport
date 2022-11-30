import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MouseEventHandler, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './OpenModal.module.scss';

export interface OpenModalProps {
  className?: string;
  withText?: boolean;
  onOpenModal: () => void;
}

export const OpenModal = memo((props: OpenModalProps) => {
  const { className, withText = false, onOpenModal } = props;
  const { t } = useTranslation();

  const onClickHandler = useCallback(() => {
    onOpenModal?.();
  }, [onOpenModal]);

  return (
    <div className={classNames(cls.OpenModal, {}, [className])}>
      {withText
        && (
          <>
            <Text
              className={cls.title}
              title={t('Заказать проведение спортивного мероприятия')}
            />
            <Text
              className={cls.text}
              title={t('Выберите одно из готовых мероприятий или создайте собственный корпоративный чемпионат')}
            />
          </>
        )}
      <Button
        className={cls.button}
        onClick={onClickHandler}
      >
        {t('Отправить заявку')}
      </Button>
    </div>
  );
});
