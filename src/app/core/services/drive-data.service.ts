import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriveItem } from 'src/app/models/drive-item';
@Injectable({
  providedIn: 'root'
})
export class DriveDataService {
  constructor(private httpClient:HttpClient) { }
   getDriveItems():Observable<DriveItem[]|null>{
    var value=this.httpClient.get<DriveItem[]|null>("/api/account/getfiles");
    return value;
  }
}
