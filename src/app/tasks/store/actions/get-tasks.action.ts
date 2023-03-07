import { createAction, props } from '@ngrx/store';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { ActionTypes } from 'src/app/tasks/store/action-types';

export const getTasksAction = createAction(
  ActionTypes.GET_TASKS,
  props<{ categoryId: number }>()
);

export const getTasksSuccessAction = createAction(
  ActionTypes.GET_TASKS_SUCCESS,
  props<{ tasks: TaskInterface[] }>()
);

export const getTasksFailureAction = createAction(
  ActionTypes.GET_TASKS_FAILURE
);
