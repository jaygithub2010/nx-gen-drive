import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DriveItem } from 'src/app/models/drive-item';

@Component({
  selector: 'app-workspace',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class WorkspaceComponent {
  @Input() driveItem:DriveItem;
}
