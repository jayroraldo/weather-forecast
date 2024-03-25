import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Weather } from '../../types/weather.type';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  @Output() showWeather: EventEmitter<boolean> = new EventEmitter<boolean>();
  removeValue: boolean = false;
  weatherData: Weather | undefined;
  dateNow = formatDate(new Date(), 'MM/dd/yyyy', 'en_US');

  constructor(private weatherService: WeatherService) {}

  onKeyPress(place: string, event: any): void {
    event.target.blur();
    this.removeValue = true;
    this.weatherService
      .getWeatherData$(place)
      .subscribe((data) => (this.weatherData = data));
  }

  onBackClicked(): void {
    this.showWeather.emit(false);
  }
}
