import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistenceService } from 'src/app/shared/services/persistence.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone();

    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('/realms/tasksbook') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        } else if (
          error instanceof HttpErrorResponse &&
          req.url.includes('/realms/tasksbook') &&
          error.status === 400
        ) {
          PersistenceService.set('access_token', '');
          PersistenceService.set('refresh_token', '');
        }
        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (PersistenceService.get('refresh_token')) {
      return this.authService.refreshToken().pipe(
        switchMap((response) => {
          PersistenceService.set('access_token', response.access_token);
          PersistenceService.set('refresh_token', response.refresh_token);

          request = request.clone({
            setHeaders: {
              Authorization: response.access_token
                ? `Bearer ${response.access_token}`
                : '',
            },
          });

          return next.handle(request);
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
    }

    return next.handle(request);
  }
}

export const RefreshTokenInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
