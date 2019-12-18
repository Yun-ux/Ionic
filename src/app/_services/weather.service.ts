import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../_models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey : string = "8c807c86e1beddf0a08c4af4d236b2ef";
  //l 'url de l'api = endPoint
  endPoint: string ="https://api.openweathermap.org/data/2.5/weather?q=";
  constructor(
    private HttpClient: HttpClient
  ) { 
    
  }
  getWeather(cityName: string) {
    // va get l'api via l'url
    return this.HttpClient
    .get<WeatherData>(this.endPoint + cityName + '&APPID=' + this.apiKey)
    .toPromise();
  }
}
