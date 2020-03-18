export const dateStringToDate = (dateString: string): Date => {
  //dateString example: 28/19/2018
  const dateParts: number[] = dateString
    .split('/')
    .map((value: string): number => parseInt(value));

  const day = dateParts[0];
  const year = dateParts[2];
  const month = dateParts[1] - 1;

  return new Date(year, month, day);
};
