import { Action, createReducer, on } from '@ngrx/store';
import {
  getStatisticDaysAction,
  getStatisticDaysSuccessAction,
} from 'src/app/shared/modules/analytycs/store/actions/get-statistic-days.action';
import {
  getStatisticNumbersAction,
  getStatisticNumbersSuccessAction,
} from 'src/app/shared/modules/analytycs/store/actions/get-statistic-numbers.action';
import { AnalytycsStateInterface } from 'src/app/shared/modules/analytycs/types/analytycs-state.interface';

const initialState: AnalytycsStateInterface = {
  statisticDays: null,
  statisticNumbers: null,
};

const analytycsReducer = createReducer(
  initialState,
  on(
    getStatisticDaysAction,
    (state): AnalytycsStateInterface => ({
      ...state,
    })
  ),
  on(
    getStatisticDaysSuccessAction,
    (state, action): AnalytycsStateInterface => ({
      ...state,
      statisticDays: action.statisticDays,
    })
  ),
  on(
    getStatisticNumbersAction,
    (state): AnalytycsStateInterface => ({
      ...state,
    })
  ),
  on(
    getStatisticNumbersSuccessAction,
    (state, action): AnalytycsStateInterface => ({
      ...state,
      statisticNumbers: action.statisticNumbers,
    })
  )
);

export function reducer(state: AnalytycsStateInterface, action: Action) {
  return analytycsReducer(state, action);
}
