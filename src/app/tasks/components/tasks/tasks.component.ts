import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { getTasksAction } from 'src/app/tasks/store/actions/get-tasks.action';
import {
  isLoadingSelector,
  tasksSelector,
} from 'src/app/tasks/store/selectors';

@Component({
  selector: 'tb-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  categoryId: number;

  tasks$: Observable<TaskInterface[] | null>;
  isLoading$: Observable<boolean>;
  completed: TaskInterface[];
  inProgress: TaskInterface[];

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchData();
    this.initListeners();
  }

  initValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.tasks$ = this.store.pipe(select(tasksSelector));
  }

  fetchData() {
    this.route.params.subscribe((params: Params) =>
      this.store.dispatch(getTasksAction({ categoryId: params['slug'] }))
    );
  }

  initListeners(): void {
    this.tasks$.subscribe((tasks: TaskInterface[]) => {
      if (tasks) {
        this.completed = tasks.filter((task) => task.status === 'COMPLETED');

        this.inProgress = tasks.filter((task) => task.status === 'IN_PROGRESS');
      }
    });
  }
}
