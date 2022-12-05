import { classNames } from 'shared/lib/classNames/classNames';
import { AppTableRow } from '../table-row';
import { IApplication } from '../../model';

export interface IAppTableBodyProps {
  className?: string;
  sortData: () => IApplication[];
}

export const AppTableBody = ({ className, sortData }: IAppTableBodyProps) => {
  return (
    <tbody>
      {sortData?.().map((application) => (
        <AppTableRow application={application} key={application.id} />
      ))}
    </tbody>
  );
};
