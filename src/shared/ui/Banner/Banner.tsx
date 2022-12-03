import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Container } from 'app/providers/Layout';
import cls from './Banner.module.scss';

export interface BannerProps {
  className?: string;
  wrapperCls?: string;
  children: ReactNode;
}

export const Banner = memo((props: BannerProps) => {
  const { className, wrapperCls, children } = props;
  return (
    <div className={classNames(cls.Banner, {}, [className])}>
      <div className={cls.gradientWrapper}>
        <Container className={[cls.contentWrapper, wrapperCls].join(' ')}>
          {children}
        </Container>
      </div>
    </div>
  );
});

Banner.displayName = 'Banner';
