import { Component, Input } from '@angular/core';
import { DriveDataService } from 'src/app/core/services/drive-data.service';
import { NgCommonService } from 'src/app/core/services/ng-common.service';
import { DriveItemLink } from 'src/app/models/drive-item-link';

@Component({
  selector: 'app-current-path',
  standalone: true,
  imports: [],
  templateUrl: './current-path.component.html',
  styleUrl: './current-path.component.css'
})
export class CurrentPathComponent {
  currentPath: DriveItemLink[] | null = [];
  constructor(private _commonService: NgCommonService, private _driveDataService: DriveDataService) {
  }

  ngOnInit() {
    // Initialize the current path with the root folder as it is the starting point for any drive
    this._driveDataService.getDriveItemNameById('root').subscribe((driveItemLink: DriveItemLink | null) => {
      if (driveItemLink) {
        this.currentPath.push(driveItemLink);
      }
    });

    //logic to modify current path incase of left panel navigation
    this._commonService.getLeftPanelItemNavigation().subscribe((driveItemLink: DriveItemLink) => {
      if (this.currentPath.findIndex((item: DriveItemLink) => item.id === driveItemLink.id) === -1) {
        this._driveDataService.getDriveItemParents(driveItemLink.id).subscribe((driveItemLinks: DriveItemLink[] | null) => {
          this.currentPath = driveItemLinks;

          this.currentPath.push(driveItemLink);
        });
      }

      //this is to account if the user navigates to a folder that is already in the current path
      else {
        this.currentPath = this.currentPath.slice(0, this.currentPath.findIndex((item: DriveItemLink) => item.id === driveItemLink.id) + 1);
      }
    }
    );

    //logic to modify current path incase of workspace navigation considering it is just nested navigation
    this._commonService.getWorkSpaceFolderNavigation().subscribe((driveItemLink: DriveItemLink) => {
      this.currentPath.push(driveItemLink)
    });
  }

  goToFolder(folderId: string, folderName: string) {
    this._commonService.setFolderId(folderId);
    this.currentPath = this.currentPath.slice(0, this.currentPath.findIndex((item: DriveItemLink) => item.id === folderId) + 1);
  }
}
