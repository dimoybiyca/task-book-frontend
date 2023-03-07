import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavListComponent } from './components/side-nav/nav-list/nav-list.component';
import { RouterModule } from '@angular/router';
import { LogoModule } from 'src/app/shared/modules/logo/logo.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/shared/modules/side-nav/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetCategoriesEffect } from 'src/app/shared/modules/side-nav/store/effects/get-categories.effect';
import { IconModule } from 'src/app/shared/modules/icon/icon.module';

@NgModule({
  declarations: [SideNavComponent, NavListComponent],
  imports: [
    CommonModule,
    RouterModule,
    LogoModule,
    IconModule,
    StoreModule.forFeature('sideNav', reducer),
    EffectsModule.forFeature([GetCategoriesEffect]),
  ],
  exports: [SideNavComponent],
})
export class SideNavModule {}
