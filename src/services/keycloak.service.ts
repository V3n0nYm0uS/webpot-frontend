import Keycloak from 'keycloak-js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  keycloak?: Keycloak;

  async init() {
    this.keycloak = new Keycloak(environment.keycloakConfig);
    await this.keycloak.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: `${location.origin}/assets/silent-check-sso.html`
    });
  }

}
 