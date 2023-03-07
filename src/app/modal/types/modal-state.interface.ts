import { TaskInterface } from 'src/app/shared/types/task.interface';

export interface ModalStateInterface {
  isModalOpen: boolean;
  isCreatingTask: boolean;
  isCreatingCategory: boolean;
  isEdititngTask: boolean;
  taskToEdit: TaskInterface | null;
}
