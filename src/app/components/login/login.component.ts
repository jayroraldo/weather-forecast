import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { LoadingComponent } from '../../shared/component/loading/loading.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoadingComponent, AsyncPipe, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(public authService: AuthenticationService) {
    this.authService.isUserAuthenticated();
  }
}
