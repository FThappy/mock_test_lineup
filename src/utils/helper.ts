import { format, startOfDay, subDays } from "date-fns";

export const convertRangeDate = (rangeDate: string): string => {
  const now = startOfDay(new Date());

  switch (rangeDate) {
    case 'All':
      return 'Tất cả thời gian';
    case '365':
    case '180':
    case '90':
    case '30':
    case '15':
    case '7': {
      const cutoff = subDays(now, Number(rangeDate));
      return `${format(cutoff, 'yyyy/MM/dd')} - ${format(now, 'yyyy/MM/dd')}`;
    }
    default:
      return 'Tất cả thời gian';
  }
};