import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { APP_SETTINGS } from 'src/app/app.initializer';
import { AppSettings } from 'src/app/models/app-settings';
import { DriveItem } from 'src/app/models/drive-item';
@Injectable({
  providedIn: 'root'
})
export class DriveDataService {
  constructor(private httpClient: HttpClient, @Inject(APP_SETTINGS) private dIConfig$: Observable<AppSettings>) { 
  }

  getDriveItems(): Observable<DriveItem[] | null> {
    return this.dIConfig$.pipe(switchMap(x => this.httpClient.get<DriveItem[] | null>(x.apiEndPoints.getFiles)))
  }
}
