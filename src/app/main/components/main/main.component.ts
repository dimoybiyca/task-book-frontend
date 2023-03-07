import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTasksAction } from 'src/app/main/store/actions/get-tasks.action';
import {
  isLoadingSelector,
  nearestTasksSelector,
} from 'src/app/main/store/selectors';
import { GetTasksResponseInterface } from 'src/app/shared/types/get-tasks-response.interface';

@Component({
  selector: 'tb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isLoading: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.isLoading = this.store.pipe(select(isLoadingSelector));
  }
}
