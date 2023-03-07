import { createSelector } from '@ngrx/store';
import { ModalStateInterface } from 'src/app/modal/types/modal-state.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.inerface';

export const modalFeatureSelector = (
  state: AppStateInterface
): ModalStateInterface => state.modal;

export const isModalOpenSelector = createSelector(
  modalFeatureSelector,
  (state: ModalStateInterface) => state.isModalOpen
);

export const isCreatingTaskSelector = createSelector(
  modalFeatureSelector,
  (state: ModalStateInterface) => state.isCreatingTask
);

export const isEditingTaskSelector = createSelector(
  modalFeatureSelector,
  (state: ModalStateInterface) => state.isEdititngTask
);

export const taskToEditSelector = createSelector(
  modalFeatureSelector,
  (state: ModalStateInterface) => state.taskToEdit
);

export const isCreatingCategorySelector = createSelector(
  modalFeatureSelector,
  (state: ModalStateInterface) => state.isCreatingCategory
);
