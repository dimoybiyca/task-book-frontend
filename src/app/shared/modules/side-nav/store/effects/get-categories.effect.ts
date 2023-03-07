import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { SideNavService } from 'src/app/shared/modules/side-nav/services/side-nav.service';
import {
  getCategoriesAction,
  getCategoriesFailureAction,
  getCategoriesSuccessAction,
} from 'src/app/shared/modules/side-nav/store/actions/get-categories.action';
import { CategoryInterface } from 'src/app/shared/modules/side-nav/types/category.interface';

@Injectable()
export class GetCategoriesEffect {
  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoriesAction),
      switchMap(() => {
        return this.sideNavService.getAllCategories().pipe(
          map((categories: CategoryInterface[]) => {
            return getCategoriesSuccessAction({ categories });
          }),

          catchError(() => {
            return of(getCategoriesFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private sideNavService: SideNavService
  ) {}
}
