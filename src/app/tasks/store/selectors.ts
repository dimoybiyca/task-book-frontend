import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/app-state.inerface';
import { TasksStateInterface } from 'src/app/tasks/types/tasks.state.interface';

export const tasksFeatureSelector = (
  state: AppStateInterface
): TasksStateInterface => state.tasks;

export const isLoadingSelector = createSelector(
  tasksFeatureSelector,
  (state: TasksStateInterface) => state.isLoading
);

export const tasksSelector = createSelector(
  tasksFeatureSelector,
  (state: TasksStateInterface) => state.tasks
);
