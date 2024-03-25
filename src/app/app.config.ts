import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AuthService, provideAuth0 } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { routes } from './app.routes';
import { WeatherService } from './components/weather/services/weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideAuth0({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
    AuthService,
    WeatherService,
  ],
};
