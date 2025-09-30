import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, finalize, Observable, switchMap, take, throwError } from 'rxjs';


let refreshInProgress = false;
const refreshSubject = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.accessToken;
  let request = req;

  // Sadece auth endpointlerini hariç tut
  const isAuthEndpoint = req.url.includes('/login') || req.url.includes('/refresh') || req.url.includes('/logout');

  const authReq = (!isAuthEndpoint && token)
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` }, withCredentials: true })
    : req.clone({ withCredentials: true });

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if ((err.status === 401 || err.status === 403) && !isAuthEndpoint) {
        return handle401(authReq, next, authService);
      }
      return throwError(() => err);
    })
  );
};

function handle401(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  auth: AuthService
): Observable<HttpEvent<unknown>> {
  if (!refreshInProgress) {
    refreshInProgress = true;
    refreshSubject.next(null);
    return auth.refresh().pipe(
      switchMap(({ accessToken }) => {
        refreshInProgress = false;
        refreshSubject.next(accessToken);
        const retryReq = accessToken
          ? req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` }, withCredentials: true })
          : req.clone({ withCredentials: true });
        return next(retryReq);
      }),
      catchError(err => {
        refreshInProgress = false;
        auth.logout().subscribe({ error: () => { } });
        return throwError(() => err);
      }),
      finalize(() => { refreshInProgress = false; })
    );
  } else {
    return refreshSubject.pipe(
      filter(t => t !== null),
      take(1),
      switchMap(t => {
        const retryReq = t
          ? req.clone({ setHeaders: { Authorization: `Bearer ${t}` }, withCredentials: true })
          : req.clone({ withCredentials: true });
        return next(retryReq);
      })
    );
  }
}

