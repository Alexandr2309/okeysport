import React, { memo } from 'react';
import { useTranslation } from "react-i18next";

const ContactsPage = () => {
  const {t} = useTranslation('contact');

  return (
    <div>
      {t('Страница контактов')}
    </div>
  );
};

export default memo(ContactsPage);
