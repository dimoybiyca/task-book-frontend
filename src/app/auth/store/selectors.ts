import { createSelector } from '@ngrx/store';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.inerface';

export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
);

export const isRefreshingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isRefreshing
);
