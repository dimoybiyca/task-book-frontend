import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getStatisticDaysAction } from 'src/app/shared/modules/analytycs/store/actions/get-statistic-days.action';
import { statisticDaysSelector } from 'src/app/shared/modules/analytycs/store/selectors';
import { StatisticDaysInterface } from 'src/app/shared/modules/analytycs/types/statistic-days.interface';

@Component({
  selector: 'tb-remark',
  templateUrl: './remark.component.html',
  styleUrls: ['./remark.component.scss'],
})
export class RemarkComponent implements OnInit {
  statisticDays$: Observable<StatisticDaysInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.initData();
  }

  initValues() {
    this.statisticDays$ = this.store.pipe(select(statisticDaysSelector));
  }

  initData() {
    this.store.dispatch(getStatisticDaysAction());
  }
}
