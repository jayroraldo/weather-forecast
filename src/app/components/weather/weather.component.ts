import { Component } from '@angular/core';
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
  weatherData: Weather | undefined;
  dateNow = formatDate(new Date(), 'MM/dd/yyyy', 'en_US');

  constructor(private weatherService: WeatherService) {}

  onKeyPress(place: string): void {
    console.log(this.dateNow);
    this.weatherService
      .getWeather(place)
      .pipe(
        map((res: any) => {
          console.log(res);
          return {
            description: res.weather[0].description,
            temp: (((res.main.temp - 273.15) * 9) / 5 + 32).toFixed() || '',
            main: res.weather[0].main,
            humidity: res.main.humidity,
            pressure: res.main.pressure,
          };
        })
      )
      .subscribe((data) => (this.weatherData = data));
  }
}
