import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, filter, map } from 'rxjs';
import { taskToEditSelector } from 'src/app/modal/store/selectors';
import { TaskInputInterface } from 'src/app/shared/types/task-input.interface';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { updateTaskAction } from 'src/app/tasks/store/actions/update-tasks.action';

@Component({
  selector: 'tb-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit, OnDestroy {
  initialValues$: Observable<TaskInputInterface>;

  taskToEdit: TaskInterface;
  taskSurbscription: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  initValues(): void {
    this.initialValues$ = this.store.pipe(
      select(taskToEditSelector),
      filter(Boolean),
      map((task: TaskInterface) => {
        return {
          name: task.name,
          priority: task.priority,
          deadlineDate: task.deadlineDate,
          categoryId: task.categoryId,
        };
      })
    );
  }

  initListeners(): void {
    this.taskSurbscription = this.store
      .pipe(select(taskToEditSelector), filter(Boolean))
      .subscribe((task: TaskInterface) => (this.taskToEdit = task));
  }

  onSubmit(taskInput: TaskInputInterface): void {
    const task: TaskInterface = {
      ...this.taskToEdit,
      ...taskInput,
    };
    this.store.dispatch(updateTaskAction({ task: task }));
  }

  ngOnDestroy(): void {
    this.taskSurbscription.unsubscribe();
  }
}
