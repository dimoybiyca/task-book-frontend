import { TaskInterface } from 'src/app/shared/types/task.interface';

export interface NearestTasksInterface {
  inProgress: TaskInterface[];
  completed: TaskInterface[];
}
