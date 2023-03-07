import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/auth/store/action-types';
import { Token } from 'src/app/auth/types/token.type';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

export const refreshTokenAction = createAction(ActionTypes.REFRESH_TOKEN);

export const refreshTokenSuccessAction = createAction(
  ActionTypes.REFRESH_TOKEN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const refreshTokenFailureAction = createAction(
  ActionTypes.REFRESH_TOKEN_FAILURE
);
