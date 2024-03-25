import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoadingComponent } from '../../shared/component/loading/loading.component';
import { CatnavigationComponent } from '../home/components/catnavigation/catnavigation.component';
import { WeatherComponent } from '../weather/weather.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CatnavigationComponent,
    CommonModule,
    WeatherComponent,
    LoadingComponent,
    RouterModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(public auth: AuthService) {}
}
