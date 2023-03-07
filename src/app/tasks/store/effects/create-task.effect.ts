import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { TasksService } from 'src/app/tasks/services/tasks.service';
import {
  createTaskAction,
  createTaskFailureAction,
  createTaskSuccessAction,
} from 'src/app/tasks/store/actions/create-task.action';
import {
  updateTaskAction,
  updateTaskFailureAction,
  updateTaskSuccessAction,
} from 'src/app/tasks/store/actions/update-tasks.action';

@Injectable()
export class CreateTaskEffect {
  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTaskAction),
      switchMap(({ task }) => {
        return this.tasksService.createTask(task).pipe(
          map((task: TaskInterface) => {
            return createTaskSuccessAction({ task });
          }),

          catchError(() => {
            return of(createTaskFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private tasksService: TasksService) {}
}
