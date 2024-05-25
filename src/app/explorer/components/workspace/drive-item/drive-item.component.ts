import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { DriveItem } from 'src/app/models/drive-item';

@Component({
  selector: 'app-drive-item',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './drive-item.component.html',
  styleUrl: './drive-item.component.css'
})
export class DriveItemComponent {
  @Input() item:DriveItem;
}
