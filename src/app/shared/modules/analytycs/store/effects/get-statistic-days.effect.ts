import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AnalytycsService } from 'src/app/shared/modules/analytycs/services/analytycs.service';
import {
  getStatisticDaysAction,
  getStatisticDaysFailureAction,
  getStatisticDaysSuccessAction,
} from 'src/app/shared/modules/analytycs/store/actions/get-statistic-days.action';
import { StatisticDaysInterface } from 'src/app/shared/modules/analytycs/types/statistic-days.interface';

@Injectable()
export class GetStatisticDaysEffect {
  getStatisticDays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStatisticDaysAction),
      switchMap(() => {
        return this.analytycsService.getStatisticDays().pipe(
          map((statisticDays: StatisticDaysInterface) => {
            return getStatisticDaysSuccessAction({ statisticDays });
          }),

          catchError(() => {
            return of(getStatisticDaysFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private analytycsService: AnalytycsService
  ) {}
}
