import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getStatisticNumbersAction } from 'src/app/shared/modules/analytycs/store/actions/get-statistic-numbers.action';
import { statisticNumbersSelector } from 'src/app/shared/modules/analytycs/store/selectors';
import { StatisticNumbersInterface } from 'src/app/shared/modules/analytycs/types/statistic-numbers.interface';

@Component({
  selector: 'tb-for-this-week',
  templateUrl: './for-this-week.component.html',
  styleUrls: ['./for-this-week.component.scss'],
})
export class ForThisWeekComponent implements OnInit {
  statisticNumbers$: Observable<StatisticNumbersInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.initData();
  }

  initValues(): void {
    this.statisticNumbers$ = this.store.pipe(select(statisticNumbersSelector));
  }

  initData() {
    this.store.dispatch(getStatisticNumbersAction());
  }
}
