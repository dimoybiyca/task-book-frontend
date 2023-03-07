import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskInputInterface } from 'src/app/shared/types/task-input.interface';
import { createTaskAction } from 'src/app/tasks/store/actions/create-task.action';

@Component({
  selector: 'tb-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  initialValues: TaskInputInterface = {
    categoryId: null,
    name: '',
    deadlineDate: null,
    priority: '',
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {}

  onSubmit(taskInput: TaskInputInterface): void {
    this.store.dispatch(createTaskAction({ task: taskInput }));
  }
}
