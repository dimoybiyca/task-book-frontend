import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/get-current-user.action';
import { Token } from 'src/app/auth/types/token.type';
import { PersistenceService } from 'src/app/shared/services/persistence.service';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        let token: Token = PersistenceService.get('access_token');

        if (!token) {
          return of(getCurrentUserFailureAction());
        }

        return of(
          getCurrentUserSuccessAction({
            currentUser: this.authService.getCurrentUser(token),
          })
        );
      })
    )
  );

  //   redirectAfterSubmit$ = createEffect(
  //     () =>
  //       this.actions$.pipe(
  //         ofType(getCurrentUserSuccessAction),
  //         tap(() => {
  //           this.router.navigateByUrl('/');
  //         })
  //       ),
  //     { dispatch: false }
  //   );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
