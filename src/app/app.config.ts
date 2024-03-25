import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AuthService, provideAuth0 } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAuth0({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
    AuthService,
  ],
};
