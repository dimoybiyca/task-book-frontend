import { CategoryInterface } from 'src/app/shared/modules/side-nav/types/category.interface';

export interface SideNavStateInterface {
  isLoading: boolean;
  categories: CategoryInterface[] | null;
}
