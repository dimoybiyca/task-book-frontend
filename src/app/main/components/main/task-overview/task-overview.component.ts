import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTasksAction } from 'src/app/main/store/actions/get-tasks.action';
import {
  isLoadingSelector,
  nearestTasksSelector,
} from 'src/app/main/store/selectors';
import { GetTasksResponseInterface } from 'src/app/shared/types/get-tasks-response.interface';
import { TaskInterface } from 'src/app/shared/types/task.interface';

@Component({
  selector: 'tb-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.scss'],
})
export class TaskOverviewComponent {
  isLoading: Observable<boolean>;
  tasks$: Observable<GetTasksResponseInterface | null>;

  completed: TaskInterface[];
  inProgress: TaskInterface[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
    this.fetchData();
  }

  initValues(): void {
    this.isLoading = this.store.pipe(select(isLoadingSelector));
    this.tasks$ = this.store.pipe(select(nearestTasksSelector));
  }

  initListeners(): void {
    this.tasks$.subscribe((response: GetTasksResponseInterface) => {
      if (response) {
        this.completed = response.tasks.filter(
          (task) => task.status === 'COMPLETED'
        );

        this.inProgress = response.tasks.filter(
          (task) => task.status === 'IN_PROGRESS'
        );
      }
    });
  }

  fetchData(): void {
    this.store.dispatch(getTasksAction());
  }
}
