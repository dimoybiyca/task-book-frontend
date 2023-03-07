import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { UserComponent } from './components/user/user.component';
import { IconModule } from 'src/app/shared/modules/icon/icon.module';

@NgModule({
  declarations: [TopBarComponent, UserComponent],
  imports: [CommonModule, IconModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
