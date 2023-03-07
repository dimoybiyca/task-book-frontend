import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/modal/store/action-types';
import { TaskInterface } from 'src/app/shared/types/task.interface';

export const openCreateTaskAction = createAction(ActionTypes.OPEN_CREATE_TASK);

export const openEditTaskAction = createAction(
  ActionTypes.OPEN_EDIT_TASK,
  props<{ task: TaskInterface }>()
);

export const openCreateCategoryAction = createAction(
  ActionTypes.OPEN_CREATE_CATEGORY
);

export const closeModalAction = createAction(ActionTypes.CLOSE_MODAL);
