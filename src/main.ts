import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule),
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
})
  .catch(err => console.error(err));
