import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutCompany } from 'pages/AboutPage/ui/AboutCompany/AboutCompany';
import { Container } from 'app/providers/Layout';
import { AboutGoals } from 'pages/AboutPage/ui/AboutGoals/AboutGoals';
import { AboutPageBanner } from 'pages/AboutPage/ui/AboutPageBanner/AboutPageBanner';
import { AboutCard } from 'pages/AboutPage/ui/AboutCard/AboutCard';
import cls from './AboutPage.module.scss';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <div className={classNames(cls.AboutPage, {}, [])}>
      <AboutPageBanner />
      <Container>
        <AboutCompany />
        <AboutGoals />
        <AboutCard />
      </Container>
    </div>
  );
};

export default AboutPage;
