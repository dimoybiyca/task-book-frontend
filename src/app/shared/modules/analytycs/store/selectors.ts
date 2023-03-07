import { createSelector } from '@ngrx/store';
import { AnalytycsStateInterface } from 'src/app/shared/modules/analytycs/types/analytycs-state.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.inerface';

export const analytycsFeatureSelector = (
  state: AppStateInterface
): AnalytycsStateInterface => state.analytycs;

export const statisticDaysSelector = createSelector(
  analytycsFeatureSelector,
  (state: AnalytycsStateInterface) => state.statisticDays
);

export const statisticNumbersSelector = createSelector(
  analytycsFeatureSelector,
  (state: AnalytycsStateInterface) => state.statisticNumbers
);
