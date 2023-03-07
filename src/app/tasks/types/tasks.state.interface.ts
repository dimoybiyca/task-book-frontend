import { TaskInterface } from 'src/app/shared/types/task.interface';

export interface TasksStateInterface {
  isLoading: boolean;
  tasks: TaskInterface[] | null;
}
