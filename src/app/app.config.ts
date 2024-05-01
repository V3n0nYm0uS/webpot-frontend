import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {LogLevel, provideAuth, authInterceptor} from "angular-auth-oidc-client";
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([authInterceptor()])),
 provideAuth({
  config: {
    authority: 'http://localhost:8080/realms/webpot/',
    redirectUrl: '/home',
    postLogoutRedirectUri: '/home',
    clientId: 'webpot-frontend',
    scope: 'openid email profile roles web-origins',
    responseType: 'id_token token',
    silentRenew: true,
    useRefreshToken: true,
    logLevel: LogLevel.Debug,
    secureRoutes: ['http://localhost:8081', 'http://localhost:4200/api', "http://localhost:8081/ingredient"]
  },
  
}),]
};
