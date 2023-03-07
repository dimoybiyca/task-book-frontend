import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentUserAction } from 'src/app/auth/store/actions/get-current-user.action';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';
import {
  isCreatingCategorySelector,
  isCreatingTaskSelector,
  isEditingTaskSelector,
  isModalOpenSelector,
} from 'src/app/modal/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isModalOpen$: Observable<boolean>;
  isCreatingTask$: Observable<boolean>;
  isEditingTask$: Observable<boolean>;
  isCreatingCategory$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchData();
  }

  initValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isModalOpen$ = this.store.pipe(select(isModalOpenSelector));
    this.isCreatingTask$ = this.store.pipe(select(isCreatingTaskSelector));
    this.isEditingTask$ = this.store.pipe(select(isEditingTaskSelector));
    this.isCreatingCategory$ = this.store.pipe(
      select(isCreatingCategorySelector)
    );
  }

  fetchData() {
    this.store.dispatch(getCurrentUserAction());
  }
}
