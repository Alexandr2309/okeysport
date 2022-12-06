import React, { HTMLAttributes } from 'react';
import cls from './Icon.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg, ...otherProps }: IconProps) => {
  return (
    <div
      {...otherProps}
      className={classNames(cls.iconWrapper, {}, [className])}
    >
      <Svg className={cls.Icon} />
    </div>
  );
};
