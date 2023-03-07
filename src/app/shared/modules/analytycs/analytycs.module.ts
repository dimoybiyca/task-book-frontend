import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForThisWeekComponent } from './components/for-this-week/for-this-week.component';
import { RemarkComponent } from './components/remark/remark.component';
import { ProgressChartComponent } from './components/progress-chart/progress-chart.component';
import { CounterComponent } from 'src/app/shared/modules/analytycs/components/for-this-week/counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { GetStatisticDaysEffect } from 'src/app/shared/modules/analytycs/store/effects/get-statistic-days.effect';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/shared/modules/analytycs/store/reducers';
import { GetStatisticNumbersEffect } from 'src/app/shared/modules/analytycs/store/effects/get-statistic-numbers.effect';

@NgModule({
  declarations: [
    ForThisWeekComponent,
    RemarkComponent,
    ProgressChartComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('analytycs', reducer),
    EffectsModule.forFeature([
      GetStatisticDaysEffect,
      GetStatisticNumbersEffect,
    ]),
  ],
  exports: [ForThisWeekComponent, RemarkComponent, ProgressChartComponent],
})
export class AnalytycsModule {}
