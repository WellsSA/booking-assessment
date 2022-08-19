import { format } from 'date-fns';

export const formatDate = (date: Date) => {
  if (!date) return '__/__/__';
  return format(new Date(date), 'MM/dd/yy');
};
