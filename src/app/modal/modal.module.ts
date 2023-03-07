import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { CreateTaskComponent } from './components/modal/create-task/create-task.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { IconModule } from 'src/app/shared/modules/icon/icon.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/modal/store/reducers';
import { CreateCategoryComponent } from './components/modal/create-category/create-category.component';
import { TaskFormModule } from 'src/app/shared/modules/task-form/task-form.module';
import { EditTaskComponent } from './components/modal/edit-task/edit-task.component';

@NgModule({
  declarations: [
    ModalComponent,
    CreateTaskComponent,
    CreateCategoryComponent,
    EditTaskComponent,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    IconModule,
    TaskFormModule,
    StoreModule.forFeature('modal', reducers),
  ],
  exports: [
    ModalComponent,
    EditTaskComponent,
    CreateTaskComponent,
    CreateCategoryComponent,
    EditTaskComponent,
  ],
})
export class ModalModule {}
