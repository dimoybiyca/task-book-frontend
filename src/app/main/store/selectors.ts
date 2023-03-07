import { createSelector } from '@ngrx/store';
import { MainStateInterface } from 'src/app/main/types/main-state.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.inerface';

export const mainFeatureSelector = (
  state: AppStateInterface
): MainStateInterface => state.main;

export const isLoadingSelector = createSelector(
  mainFeatureSelector,
  (state: MainStateInterface) => state.isLoading
);

export const nearestTasksSelector = createSelector(
  mainFeatureSelector,
  (state: MainStateInterface) => state.nearestTasks
);
