import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { closeModalAction } from 'src/app/modal/store/actions/modal.action';
import { Priority } from 'src/app/shared/data/priority';
import { categoriesSelector } from 'src/app/shared/modules/side-nav/store/selectors';
import { CategoryInterface } from 'src/app/shared/modules/side-nav/types/category.interface';
import { TaskInputInterface } from 'src/app/shared/types/task-input.interface';

@Component({
  selector: 'tb-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: TaskInputInterface;
  @Input('isSubmitting') isSubmittingProps: boolean;

  @Output('taskSubmit') taskSubmitEvent =
    new EventEmitter<TaskInputInterface>();

  $categories: Observable<CategoryInterface[]>;

  form: FormGroup;
  priorities: string[];

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initValues();
    this.initForm();
  }

  initValues() {
    this.$categories = this.store.pipe(select(categoriesSelector));
    this.priorities = Object.keys(Priority).filter((pr) => isNaN(+pr));
  }

  initForm(): void {
    this.form = this.fb.group({
      name: this.initialValuesProps.name,
      categoryId: this.initialValuesProps.categoryId,
      deadlineDate: this.formatDate(
        this.initialValuesProps.deadlineDate || new Date()
      ),
      priority: this.initialValuesProps.priority,
    });
  }

  onCancel(): void {
    this.store.dispatch(closeModalAction());
  }

  onSaveTemplate(): void {
    console.log(this.form.value);
  }

  onCreateTask(): void {
    this.taskSubmitEvent.emit(this.form.value);
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
