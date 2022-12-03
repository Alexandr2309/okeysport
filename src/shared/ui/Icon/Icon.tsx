import React, { HTMLAttributes } from 'react';
import cls from './Icon.module.scss';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg, ...otherProps }: IconProps) => (
  <div {...otherProps} className={cls.iconWrapper}>
    <Svg className={cls.Icon} />
  </div>
);
