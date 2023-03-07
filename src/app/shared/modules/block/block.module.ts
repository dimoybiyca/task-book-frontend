import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './components/block/block.component';
import { LoadingComponent } from 'src/app/shared/modules/block/components/block/loading/loading.component';

@NgModule({
  declarations: [BlockComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [BlockComponent],
})
export class BlockModule {}
