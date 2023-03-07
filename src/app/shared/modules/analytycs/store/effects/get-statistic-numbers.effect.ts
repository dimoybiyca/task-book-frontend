import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AnalytycsService } from 'src/app/shared/modules/analytycs/services/analytycs.service';
import {
  getStatisticNumbersAction,
  getStatisticNumbersFailureAction,
  getStatisticNumbersSuccessAction,
} from 'src/app/shared/modules/analytycs/store/actions/get-statistic-numbers.action';
import { StatisticNumbersInterface } from 'src/app/shared/modules/analytycs/types/statistic-numbers.interface';

@Injectable()
export class GetStatisticNumbersEffect {
  getStatisticNumbers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStatisticNumbersAction),
      switchMap(() => {
        return this.analytycsService.getStatisticNumbers().pipe(
          map((statisticNumbers: StatisticNumbersInterface) => {
            return getStatisticNumbersSuccessAction({ statisticNumbers });
          }),

          catchError(() => {
            return of(getStatisticNumbersFailureAction());
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
