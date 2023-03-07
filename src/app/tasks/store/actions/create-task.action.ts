import { createAction, props } from '@ngrx/store';
import { TaskInputInterface } from 'src/app/shared/types/task-input.interface';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { ActionTypes } from 'src/app/tasks/store/action-types';

export const createTaskAction = createAction(
  ActionTypes.CREATE_TASK,
  props<{ task: TaskInputInterface }>()
);

export const createTaskSuccessAction = createAction(
  ActionTypes.CREATE_TASK_SUCCESS,
  props<{ task: TaskInterface }>()
);

export const createTaskFailureAction = createAction(
  ActionTypes.CREATE_TASK_FAILURE
);
