import { StatisticDaysInterface } from 'src/app/shared/modules/analytycs/types/statistic-days.interface';
import { StatisticNumbersInterface } from 'src/app/shared/modules/analytycs/types/statistic-numbers.interface';

export interface AnalytycsStateInterface {
  statisticDays: StatisticDaysInterface | null;
  statisticNumbers: StatisticNumbersInterface | null;
}
