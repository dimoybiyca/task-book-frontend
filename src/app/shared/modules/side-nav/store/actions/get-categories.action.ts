import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/shared/modules/side-nav/store/action.types';
import { CategoryInterface } from 'src/app/shared/modules/side-nav/types/category.interface';

export const getCategoriesAction = createAction(ActionTypes.GET_CATEGORIES);

export const getCategoriesSuccessAction = createAction(
  ActionTypes.GET_CATEGORIES_SUCCESS,
  props<{ categories: CategoryInterface[] }>()
);

export const getCategoriesFailureAction = createAction(
  ActionTypes.GET_CATEGORIES_FAILURE
);
