import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/shared/modules/analytycs/store/action-types';
import { StatisticNumbersInterface } from 'src/app/shared/modules/analytycs/types/statistic-numbers.interface';

export const getStatisticNumbersAction = createAction(
  ActionTypes.GET_STATISTIC_NUMBERS
);

export const getStatisticNumbersSuccessAction = createAction(
  ActionTypes.GET_STATISTIC_NUMBERS_SUCCESS,
  props<{ statisticNumbers: StatisticNumbersInterface }>()
);

export const getStatisticNumbersFailureAction = createAction(
  ActionTypes.GET_STATISTIC_NUMBERS_FAILURE
);
