import { Result as ResultAntd } from 'antd';
import { Children, ReactNode } from 'react';

export enum ResultStatus {
  SUCCESS = 'success',
  ERROR = 'error ',
  INFO = 'info',
  WARNING = 'warning',
  ERROR404 = '404',
  ERROR403 = '403',
  ERROR500 = '500',
}

export interface IResultProps {
  status: ResultStatus;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const Result = (props: IResultProps) => {
  const { status = ResultStatus.SUCCESS, subtitle, title, children } = props;

  return (
    <ResultAntd
      // @ts-ignore
      status={status}
      title={title}
      subTitle={subtitle}
      extra={children}
    />
  );
};
