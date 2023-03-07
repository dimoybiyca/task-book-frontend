import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/main/store/action-types';
import { GetTasksResponseInterface } from 'src/app/shared/types/get-tasks-response.interface';

export const getTasksAction = createAction(ActionTypes.GET_TASKS);

export const getTasksSuccessAction = createAction(
  ActionTypes.GET_TASKS_SUCCESS,
  props<{ tasks: GetTasksResponseInterface }>()
);

export const getTasksFailureAction = createAction(
  ActionTypes.GET_TASKS_FAILURE
);
