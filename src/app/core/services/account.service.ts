import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { APP_SETTINGS } from 'src/app/app.initializer';
import { AppSettings } from 'src/app/models/app-settings';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  //need to check with Mastan
  constructor(private httpClient: HttpClient, @Inject(APP_SETTINGS) private dIConfig$: Observable<AppSettings>) {
  }

  getAccountDetails(): Observable<User | null> {
    return this.dIConfig$.pipe(switchMap(x => this.httpClient.get<User | null>(x.apiEndPoints.getUser)));
  };
}

