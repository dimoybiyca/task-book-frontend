import { Component, Input } from '@angular/core';

@Component({
  selector: 'tb-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
  @Input('isLoading') isLoadingProps: boolean;
}
