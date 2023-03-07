import { Component, Input } from '@angular/core';

@Component({
  selector: 'tb-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconName!: string;
}
