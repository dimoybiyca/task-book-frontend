import { Action, createReducer, on } from '@ngrx/store';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { deleteTaskSuccessAction } from 'src/app/tasks/store/actions/delete-task.action';
import {
  getTasksAction,
  getTasksFailureAction,
  getTasksSuccessAction,
} from 'src/app/tasks/store/actions/get-tasks.action';
import { updateTaskSuccessAction } from 'src/app/tasks/store/actions/update-tasks.action';
import { TasksStateInterface } from 'src/app/tasks/types/tasks.state.interface';

const initialState: TasksStateInterface = {
  isLoading: false,
  tasks: null,
};

const tasksReducer = createReducer(
  initialState,
  on(
    getTasksAction,
    (state): TasksStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getTasksSuccessAction,
    (state, action): TasksStateInterface => ({
      ...state,
      isLoading: false,
      tasks: action.tasks,
    })
  ),
  on(
    getTasksFailureAction,
    (state, action): TasksStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    updateTaskSuccessAction,
    (state, action): TasksStateInterface => ({
      ...state,
      tasks: state.tasks?.map((task: TaskInterface) => {
        return task.id === action.task.id ? action.task : task;
      }),
    })
  ),
  on(
    deleteTaskSuccessAction,
    (state, action): TasksStateInterface => ({
      ...state,
      tasks: state.tasks.filter(
        (task: TaskInterface) => task.id !== action.taskId
      ),
    })
  )
);

export function reducers(state: TasksStateInterface, action: Action) {
  return tasksReducer(state, action);
}
