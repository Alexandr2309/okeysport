import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode, useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './styles.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { sendOrder } from 'features/order/model/services/sendOrder';
import { Modal } from 'shared/ui/Modal/Modal';
import { Result, ResultStatus } from 'shared/ui/Result';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { Spin } from 'antd';
import { Loader } from 'shared/ui/Loader/Loader';
import { PageLoader } from 'widgets/PageLoader';

export interface ISendOrderProps {
  className?: string;
  children: ReactNode;
}

export const SendOrder = (props: ISendOrderProps) => {
  const { t } = useTranslation();
  const { className, children } = props;
  const [onSuccess, setOnSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const na = useNavigate();

  const onSendOrder = useCallback(async () => {
    setIsLoading(true);
    const response = await dispatch(sendOrder());
    setIsLoading(false);
    if (response.meta.requestStatus === 'fulfilled') {
      setOnSuccess(true);
    }
  }, [dispatch]);

  const returnToContacts = useCallback(() => {
    na(RoutesPath.contacts);
  }, [na]);

  return (
    <>
      <Modal isOpen={isLoading} contentCls={cls.contentModal}>
        <PageLoader />
      </Modal>
      <Button
        onClick={onSendOrder}
        className={classNames(cls.root, {}, [className])}
      >
        {children}
      </Button>
      {!isLoading && (
        <Modal
          isOpen={onSuccess}
          lazy
          className={cls.modal}
          overlayCls={cls.overlayModal}
        >
          <Result
            status={ResultStatus.SUCCESS}
            title={t('Ваша заявка успешно отправлена!')}
            subtitle={t('В ближайшее время с вами свяжется наш менеджер')}
          >
            <Button onClick={returnToContacts}>{t('Отлично!')}</Button>
          </Result>
        </Modal>
      )}
    </>
  );
};
