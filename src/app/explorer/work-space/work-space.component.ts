import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DriveItem } from 'src/app/models/drive-item';
import { DriveItemComponent } from '../components/workspace/drive-item/drive-item.component';
import { DriveDataService } from 'src/app/core/services/drive-data.service';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-workspace',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css'],
  standalone:true,
  imports:[CommonModule, DriveItemComponent, NgIf]
})
export class WorkspaceComponent {
  driveItems$:Observable<DriveItem[]| null>;
  @Input() folderId:string;
  
  constructor(private driveDataService:DriveDataService){
  }

  ngOnChanges(){
    this.driveItems$=this.driveDataService.getDriveItems(this.folderId);
  }
  // [{ id:"2",name:"test2",itemType:ItemType.FOLDER, size:123},{ id:"1",name:"test",itemType:ItemType.FOLDER, size:123}];

}
