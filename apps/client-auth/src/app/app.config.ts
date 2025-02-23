import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {  provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { LoaderInterceptor, JwtTokenInterceptor } from '@moolahmate/utils';
import { APP_CONFIG } from '@moolahmate/app-config';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes), 
    provideHttpClient(
    withInterceptorsFromDi(),
    withInterceptors([LoaderInterceptor,JwtTokenInterceptor])),
    { provide: APP_CONFIG, useValue: environment}
  ],

};
