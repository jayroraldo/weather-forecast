import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  let isAuthenticated: boolean = false;

  return isAuthenticated
    ? router.navigateByUrl('/dashboard')
    : router.navigateByUrl('/login');
};
