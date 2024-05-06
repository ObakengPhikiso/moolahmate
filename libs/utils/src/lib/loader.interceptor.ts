import {  inject } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

export const LoaderInterceptor: HttpInterceptorFn = (req:HttpRequest<any>,next:HttpHandlerFn): Observable<HttpEvent<any>> => {
    const loader = inject(LoaderService)
    loader.showLoader();
    return next(req).pipe(
      finalize(() => loader.hideLoader())
    );
}