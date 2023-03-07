import { createAction, props } from '@ngrx/store';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { ActionTypes } from 'src/app/tasks/store/action-types';

export const updateTaskAction = createAction(
  ActionTypes.UPDATE_TASK,
  props<{ task: TaskInterface }>()
);

export const updateTaskSuccessAction = createAction(
  ActionTypes.UPDATE_TASK_SUCCESS,
  props<{ task: TaskInterface }>()
);

export const updateTaskFailureAction = createAction(
  ActionTypes.UPDATE_TASK_FAILURE
);
