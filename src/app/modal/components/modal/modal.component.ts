import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { closeModalAction } from 'src/app/modal/store/actions/modal.action';

@Component({
  selector: 'tb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(private store: Store) {}

  onClickOutOfModal(): void {
    this.store.dispatch(closeModalAction());
  }
}
