import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task-list/task/task.component';
import { IconModule } from 'src/app/shared/modules/icon/icon.module';

@NgModule({
  declarations: [TaskListComponent, TaskComponent],
  imports: [CommonModule, IconModule],
  exports: [TaskListComponent],
})
export class TaskListModule {}
