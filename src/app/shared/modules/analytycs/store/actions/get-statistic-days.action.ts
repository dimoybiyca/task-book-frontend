import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/shared/modules/analytycs/store/action-types';
import { StatisticDaysInterface } from 'src/app/shared/modules/analytycs/types/statistic-days.interface';

export const getStatisticDaysAction = createAction(
  ActionTypes.GET_STATISTIC_DAYS
);

export const getStatisticDaysSuccessAction = createAction(
  ActionTypes.GET_STATISTIC_DAYS_SUCCESS,
  props<{ statisticDays: StatisticDaysInterface }>()
);

export const getStatisticDaysFailureAction = createAction(
  ActionTypes.GET_STATISTIC_DAYS_FAILURE
);
