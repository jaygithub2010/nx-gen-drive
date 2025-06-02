import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DriveDataService } from 'src/app/core/services/drive-data.service';
import { NgCommonService } from 'src/app/core/services/ng-common.service';
import { DriveItemLink } from 'src/app/models/drive-item-link';

@Component({
  selector: 'app-left-panel',
  templateUrl: './recent-item.component.html',
  styleUrls: ['./recent-item.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class RecentItemComponent {

  reccentItemLinks$: Observable<DriveItemLink[] | null>;

  constructor(private _ngCommonService: NgCommonService, private _driveDataService: DriveDataService, private _router: Router) {
    this.reccentItemLinks$ = this._driveDataService.getRecentFolders();
  }

  navigateToFolder(folderId: string, folderName: string): void {
    this._router.navigate(['/explorer/' + folderId]);
    this._ngCommonService.setLeftPanelFolderNavigation({ id: folderId, name: folderName });
    this._ngCommonService.setFolderId(folderId);
  }
}
