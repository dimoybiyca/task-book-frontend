import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from 'src/app/shared/modules/side-nav/types/category.interface';

@Component({
  selector: 'tb-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  @Input('listTitle') listTitleProps: string;
  @Input('categories') categoriesProps$: Observable<CategoryInterface[] | null>;
}
