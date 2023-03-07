import { createSelector } from '@ngrx/store';
import { SideNavStateInterface } from 'src/app/shared/modules/side-nav/types/side-nav-state.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.inerface';

export const sideNavFeatureSelector = (
  state: AppStateInterface
): SideNavStateInterface => state.sideNav;

export const isLoadingSelector = createSelector(
  sideNavFeatureSelector,
  (state: SideNavStateInterface) => state.isLoading
);

export const categoriesSelector = createSelector(
  sideNavFeatureSelector,
  (state: SideNavStateInterface) => state.categories
);
