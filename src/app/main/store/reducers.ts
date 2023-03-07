import { Action, createReducer, on } from '@ngrx/store';
import {
  getTasksAction,
  getTasksFailureAction,
  getTasksSuccessAction,
} from 'src/app/main/store/actions/get-tasks.action';
import { MainStateInterface } from 'src/app/main/types/main-state.interface';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { deleteTaskSuccessAction } from 'src/app/tasks/store/actions/delete-task.action';
import { updateTaskSuccessAction } from 'src/app/tasks/store/actions/update-tasks.action';
import { TasksStateInterface } from 'src/app/tasks/types/tasks.state.interface';

const initialState: MainStateInterface = {
  isLoading: false,
  nearestTasks: null,
};

const mainReducer = createReducer(
  initialState,
  on(
    getTasksAction,
    (state): MainStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getTasksSuccessAction,
    (state, action): MainStateInterface => ({
      ...state,
      isLoading: false,
      nearestTasks: action.tasks,
    })
  ),
  on(
    getTasksFailureAction,
    (state): MainStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    updateTaskSuccessAction,
    (state, action): MainStateInterface => ({
      ...state,
      nearestTasks: {
        tasks: state.nearestTasks?.tasks.map((task: TaskInterface) => {
          return task.id === action.task.id ? action.task : task;
        }),
      },
    })
  ),
  on(
    deleteTaskSuccessAction,
    (state, action): MainStateInterface => ({
      ...state,
      nearestTasks: {
        tasks: state.nearestTasks?.tasks.filter(
          (task: TaskInterface) => task.id !== action.taskId
        ),
      },
    })
  )
);

export function reducers(state: MainStateInterface, action: Action) {
  return mainReducer(state, action);
}
