import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { APP_CONFIG } from '../../app.config';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  const url = req.url;
  const env: any = inject(APP_CONFIG);
  let request = req;

  if (!url.startsWith('/assets/')) {
    request = req.clone({
      url: `${env.apiUrl}${url}`
    });
  }
  return next(request);

};
