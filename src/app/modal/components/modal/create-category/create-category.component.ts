import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { closeModalAction } from 'src/app/modal/store/actions/modal.action';

@Component({
  selector: 'tb-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent {
  constructor(private store: Store) {}

  onCancel() {
    this.store.dispatch(closeModalAction());
  }
}
