import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MainService } from 'src/app/main/services/main.service';
import {
  getTasksAction,
  getTasksFailureAction,
  getTasksSuccessAction,
} from 'src/app/main/store/actions/get-tasks.action';
import { GetTasksResponseInterface } from 'src/app/shared/types/get-tasks-response.interface';

@Injectable()
export class GetTasksEffect {
  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasksAction),
      switchMap(() => {
        return this.mainService.getTasks().pipe(
          map((tasks: GetTasksResponseInterface) => {
            return getTasksSuccessAction({ tasks });
          }),

          catchError(() => {
            return of(getTasksFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private mainService: MainService) {}
}
