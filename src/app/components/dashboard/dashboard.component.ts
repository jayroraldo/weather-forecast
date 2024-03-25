import { Component } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WeatherComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  displayWeather = false;
  constructor(public auth: AuthService) {}

  onDisplayClicked(show: boolean): void {
    this.displayWeather = show;
  }
}
