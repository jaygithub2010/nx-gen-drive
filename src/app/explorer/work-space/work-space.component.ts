import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DriveItem } from 'src/app/models/drive-item';
import { DriveItemComponent } from '../components/workspace/drive-item/drive-item.component';
import { DriveDataService } from 'src/app/core/services/drive-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { NgCommonService } from 'src/app/core/services/ng-common.service';
@Component({
  selector: 'app-workspace',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css'],
  standalone: true,
  imports: [CommonModule, DriveItemComponent, NgIf]
})
export class WorkspaceComponent {
  driveItems$: Observable<DriveItem[] | null>;
  @Input() folderId: string;

  constructor(private driveDataService: DriveDataService, private ngCommonService: NgCommonService) {
  }
  ngOnInit() {
    this.driveItems$ = this.driveDataService.getDriveItems(this.folderId);

  }
  ngOnChanges() {

    //getting drive items details as a observable if a file is clicked from workspace
    this.ngCommonService.setFolderId(this.folderId);
    this.ngCommonService.getFolderId().subscribe(currentfolderId => {
      this.driveItems$ = this.driveDataService.getDriveItems(currentfolderId);
    });
    this.ngCommonService.getSearchOptions().subscribe((searchOptions) => {
      this.driveItems$ = this.driveDataService.searchDriveItems(searchOptions);
    });
  }
  // [{ id:"2",name:"test2",itemType:ItemType.FOLDER, size:123},{ id:"1",name:"test",itemType:ItemType.FOLDER, size:123}];

}
