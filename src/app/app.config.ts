import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule, provideProtractorTestingSupport } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideAppInitializer } from "./app.initializer";
import routeConfig from "./routes";

export const appConfig: ApplicationConfig =  {

  providers: [importProvidersFrom(BrowserModule),
    provideProtractorTestingSupport(),
    provideHttpClient(withInterceptorsFromDi()),//dont know why withInterceptrosfromdi added need to have look at it
    provideAppInitializer(),
    provideRouter(routeConfig)
  ]
}