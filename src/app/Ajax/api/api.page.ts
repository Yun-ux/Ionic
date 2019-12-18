import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/_services/weather.service';
import { WeatherData } from 'src/app/_models/weather';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  constructor(
    private weatherService : WeatherService
  ) { }
  cityName:string;

  weather: WeatherData;

  ngOnInit() {
  }

  search(){
    this.weatherService.getWeather(this.cityName)
    .then(data => this.weather = data);
  }
}
