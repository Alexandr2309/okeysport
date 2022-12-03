import { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './styles.module.scss';

interface ISkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
  backgroundColor?: string;
}
export const Skeleton = (props: ISkeletonProps) => {
  const { border, height, className, width, backgroundColor } = props;

  const styles: CSSProperties = {
    width,
    border,
    height,
    backgroundColor,
  };

  return (
    <div style={styles} className={classNames(cls.root, {}, [className])} />
  );
};
