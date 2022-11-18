import React from 'react';
import cls from './Icon.module.scss';

export interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => (
  <Svg className={cls.Icon} />
);