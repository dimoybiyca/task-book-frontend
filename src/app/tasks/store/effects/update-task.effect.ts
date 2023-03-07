import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { TasksService } from 'src/app/tasks/services/tasks.service';
import {
  updateTaskAction,
  updateTaskFailureAction,
  updateTaskSuccessAction,
} from 'src/app/tasks/store/actions/update-tasks.action';

@Injectable()
export class UpdateTaskEffect {
  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTaskAction),
      switchMap(({ task }) => {
        return this.tasksService.updateTask(task).pipe(
          map((task: TaskInterface) => {
            return updateTaskSuccessAction({ task });
          }),

          catchError(() => {
            return of(updateTaskFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private tasksService: TasksService) {}
}
