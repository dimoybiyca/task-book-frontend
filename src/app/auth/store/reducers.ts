import { Action, createReducer, on } from '@ngrx/store';
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from 'src/app/auth/store/actions/get-current-user.action';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/auth/store/actions/login.action';
import {
  refreshTokenAction,
  refreshTokenFailureAction,
  refreshTokenSuccessAction,
} from 'src/app/auth/store/actions/refresh-token.action';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  currentUser: null,
};

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    loginFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    refreshTokenAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoggedIn: false,
      isRefreshing: true,
    })
  ),
  on(
    refreshTokenSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isRefreshing: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    refreshTokenFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isRefreshing: false,
      isLoggedIn: false,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
