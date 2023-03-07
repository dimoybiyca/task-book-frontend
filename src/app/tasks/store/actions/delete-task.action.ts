import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/tasks/store/action-types';

export const deleteTaskAction = createAction(
  ActionTypes.DELETE_TASK,
  props<{ taskId: number }>()
);

export const deleteTaskSuccessAction = createAction(
  ActionTypes.DELETE_TASK_SUCCESS,
  props<{ taskId: number }>()
);

export const deleteTaskFailureAction = createAction(
  ActionTypes.DELETE_TASK_FAILURE
);
