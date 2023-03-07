import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { UpdateTaskEffect } from 'src/app/tasks/store/effects/update-task.effect';
import { TaskListModule } from 'src/app/shared/modules/task-list/task-list.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/tasks/store/reducers';
import { GetTasksEffect } from 'src/app/tasks/store/effects/get-tasks.effect';
import { CreateTaskEffect } from 'src/app/tasks/store/effects/create-task.effect';
import { DeleteTaskEffect } from 'src/app/tasks/store/effects/delete-task.effect';

const routes = [
  {
    path: 'categories/:slug/tasks',
    component: TasksComponent,
  },
];

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    TaskListModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      UpdateTaskEffect,
      GetTasksEffect,
      CreateTaskEffect,
      DeleteTaskEffect,
    ]),
    StoreModule.forFeature('tasks', reducers),
  ],
})
export class TasksModule {}
