import { GetTasksResponseInterface } from 'src/app/shared/types/get-tasks-response.interface';

export interface MainStateInterface {
  isLoading: boolean;
  nearestTasks: GetTasksResponseInterface | null;
}
