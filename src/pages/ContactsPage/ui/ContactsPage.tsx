import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'app/providers/Layout';
import { Text } from 'shared/ui/Text/Text';
import { Banner } from 'shared/ui/Banner/Banner';
import Map from 'widgets/Map';
import cls from './ContactsPage.module.scss';

const ContactsPage = () => {
  const { t } = useTranslation('contact');

  return (
    <section className={cls.ContactsPage}>
      <Banner>
        <Text
          // className={cls.title}
          title={t('Контакты')}
        />
      </Banner>
      <Container>
        <div className={cls.wrapper}>
          <div className={cls.textWrapper}>
            <Text
              className={cls.title}
              title={t('Юридический адрес')}
              text={t('г. Хабаровск, ул. Тихоокеанская, д. 204')}
            />
            <Text
              className={cls.title}
              title={`${t('Email')}:`}
              text={t('okeysport@mail.ru')}
            />
            <Text
              className={cls.title}
              title={`${t('Телефон')}:`}
              text={t('+ 7 (962) 425 78 45')}
            />
          </div>
          <Map className={cls.map} />
        </div>
      </Container>
    </section>
  );
};

export default memo(ContactsPage);
