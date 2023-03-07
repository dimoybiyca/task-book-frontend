import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { openCreateTaskAction } from 'src/app/modal/store/actions/modal.action';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

@Component({
  selector: 'tb-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  }

  onAddTask(): void {
    this.store.dispatch(openCreateTaskAction());
  }
}
