import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const JwtTokenInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.token;
  
  if(!token) {
    return next(request);
  }
  request = addToken(request, token);
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {      
      if(error.status === 401 && token) {
        return JWTRefreshTokenInterceptor(request, next, authService);
      } else {
        router.navigateByUrl("/auth");
      }
      return throwError(() =>error);
    })
  );
}

const addToken = (request: HttpRequest<unknown>, token: string): HttpRequest<unknown> => {
return request.clone({
  headers: request.headers.set('authorization', 'Bearer ' + token)
})
}

const JWTRefreshTokenInterceptor = (request:HttpRequest<unknown>, next: HttpHandlerFn, authService: AuthService): Observable<HttpEvent<any>> => {

  const token = authService.refresh_token as string;
  const {email} = JSON.parse(authService.currUser as any)

  return authService.refreshToken(token, email).pipe(
    switchMap(() => {
      return next(request);
    }),
    catchError(error => throwError(() => error)
  ))
}