import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { JwtTokenInterceptor, LoaderInterceptor } from '@moolahmate/utils';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideHttpClient(
    withInterceptorsFromDi(),
    withInterceptors([LoaderInterceptor,JwtTokenInterceptor]))],

};
