import { AsyncPipe, CommonModule, DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faCloud = faCloud;

  constructor(
    @Inject(DOCUMENT) public doc: Document,
    public authService: AuthService
  ) {}

  logout() {
    this.authService.logout({
      logoutParams: { returnTo: this.doc.location.origin },
    });
  }
}
