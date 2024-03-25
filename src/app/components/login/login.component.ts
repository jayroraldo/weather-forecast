import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoadingComponent } from '../../shared/component/loading/loading.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoadingComponent, AsyncPipe, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router, public auth: AuthService) {
    auth.isAuthenticated$.subscribe((isAuth) => {
      if (isAuth) {
        this.router.navigateByUrl('/home');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  onLoginRedirect(): void {
    this.auth.loginWithRedirect();
  }
}
