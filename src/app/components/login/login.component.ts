import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(public auth: AuthService) {}

  onLoginRedirect(): void {
    this.auth.loginWithRedirect();
  }
}
