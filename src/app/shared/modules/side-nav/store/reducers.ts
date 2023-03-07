import { Action, createReducer, on } from '@ngrx/store';
import {
  getCategoriesAction,
  getCategoriesFailureAction,
  getCategoriesSuccessAction,
} from 'src/app/shared/modules/side-nav/store/actions/get-categories.action';
import { SideNavStateInterface } from 'src/app/shared/modules/side-nav/types/side-nav-state.interface';

const initialState: SideNavStateInterface = {
  isLoading: false,
  categories: null,
};

const authReducer = createReducer(
  initialState,
  on(
    getCategoriesAction,
    (state): SideNavStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCategoriesSuccessAction,
    (state, action): SideNavStateInterface => ({
      ...state,
      isLoading: false,
      categories: action.categories,
    })
  ),
  on(
    getCategoriesFailureAction,
    (state): SideNavStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducer(state: SideNavStateInterface, action: Action) {
  return authReducer(state, action);
}
