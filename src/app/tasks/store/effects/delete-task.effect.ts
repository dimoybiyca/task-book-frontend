import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TasksService } from 'src/app/tasks/services/tasks.service';
import {
  deleteTaskAction,
  deleteTaskFailureAction,
  deleteTaskSuccessAction,
} from 'src/app/tasks/store/actions/delete-task.action';

@Injectable()
export class DeleteTaskEffect {
  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTaskAction),
      switchMap(({ taskId }) => {
        return this.tasksService.deleteTask(taskId).pipe(
          map(() => {
            return deleteTaskSuccessAction({ taskId });
          }),

          catchError(() => {
            return of(deleteTaskFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private tasksService: TasksService) {}
}
