import { Action, createReducer, on } from '@ngrx/store';
import {
  closeModalAction,
  openCreateCategoryAction,
  openCreateTaskAction,
  openEditTaskAction,
} from 'src/app/modal/store/actions/modal.action';
import { ModalStateInterface } from 'src/app/modal/types/modal-state.interface';
import { createTaskSuccessAction } from 'src/app/tasks/store/actions/create-task.action';
import { updateTaskSuccessAction } from 'src/app/tasks/store/actions/update-tasks.action';

const initialState: ModalStateInterface = {
  isModalOpen: false,
  isCreatingTask: false,
  isCreatingCategory: false,
  isEdititngTask: false,
  taskToEdit: null,
};

const modalReducer = createReducer(
  initialState,
  on(
    openCreateTaskAction,
    (state): ModalStateInterface => ({
      ...state,
      isModalOpen: true,
      isCreatingTask: true,
    })
  ),
  on(
    openEditTaskAction,
    (state, action): ModalStateInterface => ({
      ...state,
      isModalOpen: true,
      isEdititngTask: true,
      taskToEdit: action.task,
    })
  ),
  on(
    openCreateCategoryAction,
    (state): ModalStateInterface => ({
      ...state,
      isModalOpen: true,
      isCreatingCategory: true,
    })
  ),
  on(createTaskSuccessAction, () => initialState),
  on(updateTaskSuccessAction, () => initialState),
  on(closeModalAction, () => initialState)
);

export function reducers(state: ModalStateInterface, action: Action) {
  return modalReducer(state, action);
}
