import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DriveItemLink } from 'src/app/models/drive-item-link';
import { DriveDataService } from './drive-data.service';

@Injectable({
  providedIn: 'root'
})
export class NgCommonService {
  private _folderIdSubject: Subject<string> = new Subject<string>();
  private _leftPanelFolderNavigationSubject: Subject<DriveItemLink> = new Subject<DriveItemLink>();
  private _workSpaceFolderNavigationubject: Subject<DriveItemLink> = new Subject<DriveItemLink>();
  constructor(private _driveDataService: DriveDataService) {

  }
  setFolderId(folderId: string): void {
    this._folderIdSubject.next(folderId);
  }
  getFolderId(): Observable<string> {
    return this._folderIdSubject.asObservable();
  }
  setLeftPanelFolderNavigation(driveItemLink: DriveItemLink) {
    this._leftPanelFolderNavigationSubject.next(driveItemLink);
  }
  getLeftPanelItemNavigation(): Observable<DriveItemLink> {
    return this._leftPanelFolderNavigationSubject;
  }
  setWorkSpaceFolderNavigation(driveItemLink: DriveItemLink): void {
    this._workSpaceFolderNavigationubject.next(driveItemLink);
  }
  getWorkSpaceFolderNavigation(): Observable<DriveItemLink> {
    return this._workSpaceFolderNavigationubject.asObservable();
  }
}
