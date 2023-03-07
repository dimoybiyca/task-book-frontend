import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistenceService } from 'src/app/shared/services/persistence.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes('/realms/tasksbook')) {
      return next.handle(request);
    }

    const token = PersistenceService.get('access_token');

    request = request.clone({
      setHeaders: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
    return next.handle(request);
  }
}

export const AccessTokenInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
