import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webpot-frontend';

  constructor (private oidcSecurityService: OidcSecurityService){}

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({isAuthenticated, userData}) => {
        if (isAuthenticated) {
          console.log("User is authenticated");
          console.log("User data: ", userData);
        } else {
          console.log("User is not authenticated");
          this.login()
        }
      }
    );
  }


  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
}
