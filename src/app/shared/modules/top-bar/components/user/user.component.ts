import { Component, Input } from '@angular/core';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

@Component({
  selector: 'tb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input('user') userProps: CurrentUserInterface;
}
