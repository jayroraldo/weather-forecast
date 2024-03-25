import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { EventEmitter } from 'stream';

@Injectable()
export class AuthenticationService {
  isLoading$: Observable<boolean>;
  isAuthenticated$: Observable<boolean>;
  user$: Observable<any>;

  constructor(private router: Router, private auth: AuthService) {
    this.isLoading$ = this.auth.isLoading$;
    this.isAuthenticated$ = this.auth.isAuthenticated$;
    this.user$ = this.auth.user$;
  }

  isUserAuthenticated(): void {
    this.auth.isAuthenticated$.subscribe((isAuth) => {
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
