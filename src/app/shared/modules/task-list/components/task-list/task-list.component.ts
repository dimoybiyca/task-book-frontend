import { Component, Input } from '@angular/core';
import { TaskInterface } from 'src/app/shared/types/task.interface';

@Component({
  selector: 'tb-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input('tasks') tasksProps: TaskInterface[];
}
