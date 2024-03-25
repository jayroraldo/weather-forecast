import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Weather } from '../../../types/weather.type';

@Injectable()
export class WeatherService {
  // API_KEY can be found in Auth0 when logged in
  private API_KEY = '9bc374b00fcb3fb59d511d4eed61a3bb';

  constructor(private httpClient: HttpClient) {}

  private getWeather(query: string): Observable<any> {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&limit=5&appid=${this.API_KEY}`;

    return this.httpClient.get<any>(url);
  }

  getWeatherData$(query: string): Observable<Weather> {
    return this.getWeather(query).pipe(
      map((res: any) => {
        return {
          description: res.weather[0].description,
          temp: (((res.main.temp - 273.15) * 9) / 5 + 32).toFixed() || '',
          main: res.weather[0].main,
          humidity: res.main.humidity,
          pressure: res.main.pressure,
          name: res.name,
        };
      })
    );
  }
}
