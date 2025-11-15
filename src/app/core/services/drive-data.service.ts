import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { concatMap, Observable } from 'rxjs';
import { APP_SETTINGS } from 'src/app/app.initializer';
import { AppSettings } from 'src/app/models/app-settings';
import { DriveItem } from 'src/app/models/drive-item';
import { DriveItemLink } from 'src/app/models/drive-item-link';
import { SearchOptions } from 'src/app/models/search-options';
@Injectable({
  providedIn: 'root'
})
export class DriveDataService {
  constructor(private httpClient: HttpClient, @Inject(APP_SETTINGS) private dIConfig$: Observable<AppSettings>) {
  }

  getDriveItems(folderId?: string): Observable<DriveItem[] | null> {

    const options = folderId ? { params: new HttpParams().set('folderId', folderId) } : {};
    return this.dIConfig$.pipe(concatMap(x => this.httpClient.get<DriveItem[] | null>(x.apiEndPoints.getFiles, options)));

  }
  getDriveItemParents(driveItemId: string): Observable<DriveItemLink[] | null> {
    const options = driveItemId ? { params: new HttpParams().set('driveItemId', driveItemId) } : {};

    return this.dIConfig$.pipe(concatMap(x => {
      return this.httpClient.get<DriveItemLink[] | null>(x.apiEndPoints.getDriveItemParents, options)
        ;
    }));
  }
  getRecentFolders(): Observable<DriveItemLink[] | null> {
    return this.dIConfig$.pipe(concatMap(x => this.httpClient.get<DriveItemLink[] | null>(x.apiEndPoints.getRecentFolders)));
  }
  getDriveItemNameById(driveItemId: string): Observable<DriveItemLink | null> {
    const options = driveItemId ? { params: new HttpParams().set('driveItemId', driveItemId) } : {};
    return this.dIConfig$.pipe(concatMap(x => this.httpClient.get<DriveItemLink | null>(x.apiEndPoints.getDriveItemNameById, options)));
  }
  searchDriveItems(searchOptions: SearchOptions): Observable<DriveItem[] | null> {
    return this.dIConfig$.pipe(concatMap(x => this.httpClient.post<DriveItem[] | null>(x.apiEndPoints.searchFiles, searchOptions)));
  }
}
