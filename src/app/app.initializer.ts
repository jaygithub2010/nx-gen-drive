import { HttpClient } from '@angular/common/http';
import { InjectionToken, Provider } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../environments/environment';
import { AppSettings } from './models/app-settings';

export const APP_SETTINGS = new InjectionToken<Observable<AppSettings>>('AppSettings equivalent for Angular');
const CONFIG_URL = `/assets/config${environment.name}.json`;

export function appInitializer(httpClient: HttpClient): Observable<AppSettings> {
  let appConfig: Observable<AppSettings>;
  // var httpClient:HttpClient=new HttpClient(http);
  try {
    appConfig = httpClient.get<AppSettings>(CONFIG_URL).pipe(shareReplay());
  }
  catch (error) {
    console.error('Error loading configuration:', error);
    throw error;
  }
  return appConfig;
}

export function provideAppInitializer(): Provider {
  return {
    provide: APP_SETTINGS,
    useFactory: appInitializer,
    deps: [HttpClient],
    multi: false, //this is changed from default may be looked after some time so that it can be exploited for better
  };
}
