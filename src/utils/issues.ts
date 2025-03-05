import { parseJSON, differenceInDays } from 'date-fns';

export const calculateDaysFromDate = (createdAt: string): number => {
  const daysDifference = differenceInDays(new Date(), parseJSON(createdAt));

  return daysDifference;
};
