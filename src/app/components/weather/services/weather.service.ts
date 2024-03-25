import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  private API_KEY = '9bc374b00fcb3fb59d511d4eed61a3bb';

  constructor(private httpClient: HttpClient) {}

  getWeather(query: string): Observable<any> {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&limit=5&appid=${this.API_KEY}`;

    return this.httpClient.get<any>(url);
  }
}
