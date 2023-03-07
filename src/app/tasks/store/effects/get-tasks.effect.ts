import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { TasksService } from 'src/app/tasks/services/tasks.service';
import {
  getTasksAction,
  getTasksFailureAction,
  getTasksSuccessAction,
} from 'src/app/tasks/store/actions/get-tasks.action';

@Injectable()
export class GetTasksEffect {
  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasksAction),
      switchMap(({ categoryId }) => {
        return this.tasksService.getTasksByCategory(categoryId).pipe(
          map((tasks: TaskInterface[]) => {
            return getTasksSuccessAction({ tasks });
          }),

          catchError(() => {
            return of(getTasksFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private tasksService: TasksService) {}
}
