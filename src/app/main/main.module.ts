import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { TaskOverviewComponent } from './components/main/task-overview/task-overview.component';
import { ClockComponent } from './components/main/clock/clock.component';
import { FactOfDayComponent } from './components/main/fact-of-day/fact-of-day.component';
import { AnalytycsModule } from 'src/app/shared/modules/analytycs/analytycs.module';
import { RouterModule } from '@angular/router';
import { TaskListModule } from 'src/app/shared/modules/task-list/task-list.module';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from 'src/app/main/store/reducers';
import { StoreModule } from '@ngrx/store';
import { GetTasksEffect } from 'src/app/main/store/effects/get-tasks.effect';
import { BlockModule } from 'src/app/shared/modules/block/block.module';

const routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    TaskOverviewComponent,
    ClockComponent,
    FactOfDayComponent,
  ],
  imports: [
    CommonModule,
    AnalytycsModule,
    TaskListModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('main', reducers),
    EffectsModule.forFeature([GetTasksEffect]),
    BlockModule,
  ],
})
export class MainModule {}
