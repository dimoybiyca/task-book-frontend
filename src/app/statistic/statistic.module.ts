import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './components/statistic/statistic.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'statistic',
    component: StatisticComponent,
  },
];

@NgModule({
  declarations: [StatisticComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StatisticModule {}
