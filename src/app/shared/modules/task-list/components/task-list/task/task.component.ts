import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { openEditTaskAction } from 'src/app/modal/store/actions/modal.action';
import { TaskInterface } from 'src/app/shared/types/task.interface';
import { deleteTaskAction } from 'src/app/tasks/store/actions/delete-task.action';
import { updateTaskAction } from 'src/app/tasks/store/actions/update-tasks.action';

@Component({
  selector: 'tb-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input('task') taskProps: TaskInterface;

  isCompleted: boolean;
  confirmDelete: boolean = false;
  isHovered: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.isCompleted = this.taskProps.status === 'COMPLETED';
  }

  changeStatus(event: Event) {
    console.log(event.target['checked']);

    let task: TaskInterface = { ...this.taskProps };

    task.status = this.isCompleted === true ? 'IN_PROGRESS' : 'COMPLETED';
    this.isCompleted = !this.isCompleted;

    this.store.dispatch(updateTaskAction({ task: task }));
  }

  onUpdate(): void {
    this.store.dispatch(openEditTaskAction({ task: this.taskProps }));
  }

  delete() {
    if (this.confirmDelete) {
      this.store.dispatch(deleteTaskAction({ taskId: this.taskProps.id }));
    } else {
      this.confirmDelete = true;
    }
  }
}
