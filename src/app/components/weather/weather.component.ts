import { Component, EventEmitter, Output, output } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { AsyncPipe, JsonPipe, formatDate } from '@angular/common';
import { Weather } from '../../types/weather.type';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  @Output() showWeather: EventEmitter<boolean> = new EventEmitter<boolean>();

  weatherData: Weather | undefined;
  dateNow = formatDate(new Date(), 'MM/dd/yyyy', 'en_US');

  constructor(private weatherService: WeatherService) {}

  onKeyPress(place: string): void {
    this.weatherService
      .getWeatherData$(place)
      .subscribe((data) => (this.weatherData = data));
  }

  onBackClicked(): void {
    this.showWeather.emit(false);
  }
}
