import { IApplication } from '../model';

export interface ISortedDataArgs {
  currentData: IApplication[];
  sortKey: keyof IApplication;
  reverse: boolean;
}

export const sortedData = ({
  currentData,
  sortKey,
  reverse,
}: ISortedDataArgs) => {
  if (!sortKey) return currentData;

  const sortedData = [...currentData].sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) return sortedData.reverse();

  return sortedData;
};
