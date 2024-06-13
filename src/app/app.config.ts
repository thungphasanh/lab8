import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  //khai báo provideHttpClient
  providers: [provideRouter(routes),provideHttpClient()]
};
