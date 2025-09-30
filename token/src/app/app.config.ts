import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { urlInterceptor } from './shared/interceptors/url.interceptor';
import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const APP_CONFIG = new InjectionToken('App Config');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([urlInterceptor, authInterceptor])),
    {
      provide: APP_CONFIG,
      useValue: environment,
    },
    provideAnimations(),
    provideToastr(),
  ]
};
