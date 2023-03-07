import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { openCreateCategoryAction } from 'src/app/modal/store/actions/modal.action';
import { getCategoriesAction } from 'src/app/shared/modules/side-nav/store/actions/get-categories.action';
import {
  categoriesSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/side-nav/store/selectors';
import { CategoryInterface } from 'src/app/shared/modules/side-nav/types/category.interface';

@Component({
  selector: 'tb-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  categories$: Observable<CategoryInterface[] | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchData();
  }

  initValues() {
    this.categories$ = this.store.pipe(select(categoriesSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchData() {
    this.store.dispatch(getCategoriesAction());
  }

  onAddCategory(): void {
    this.store.dispatch(openCreateCategoryAction());
  }
}
