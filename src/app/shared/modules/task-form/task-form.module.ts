import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskFormComponent],
  imports: [CommonModule, NgSelectModule, ReactiveFormsModule],
  exports: [TaskFormComponent],
})
export class TaskFormModule {}
