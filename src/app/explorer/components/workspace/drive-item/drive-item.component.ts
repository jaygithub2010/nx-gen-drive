import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DriveItem } from 'src/app/models/drive-item';

@Component({
  selector: 'app-drive-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drive-item.component.html',
  styleUrl: './drive-item.component.css'
})
export class DriveItemComponent {
  @Input() driveItem: DriveItem;
}
