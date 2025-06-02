import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgCommonService } from 'src/app/core/services/ng-common.service';
import { DriveItem } from 'src/app/models/drive-item';
declare var $:any;

@Component({
  selector: 'app-drive-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './drive-item.component.html',
  styleUrl: './drive-item.component.css'
})
export class DriveItemComponent {
  @Input() driveItem: DriveItem;
  constructor(private _router: Router, private _ngCommonService: NgCommonService) { 
  }
  ngOnInit() {
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip({
      });
      $('[data-toggle="tooltip"]').on('click', function(){
        $(this).tooltip('hide');
      });
    })
  }
  navigateToFolder(folderId: string, folderName: string) {
    this._router.navigate(['/explorer/'+folderId]);
    this._ngCommonService.setWorkSpaceFolderNavigation(  {id: folderId, name: folderName});
  }
}

