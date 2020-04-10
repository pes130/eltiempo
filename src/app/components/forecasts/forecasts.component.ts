import { Component, OnInit, Input } from '@angular/core';
import { List, ForecastResponse } from 'src/app/interfaces/forecast';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.scss'],
})
export class ForecastsComponent implements OnInit {

  @Input() localizacion = null;
  tiempos:List[] = [];
  forecast:ForecastResponse = null;
  ahora:Date = new Date();
  constructor(private weatherService:WeatherService) {

  }
  
  ngOnInit(): void {
    this.weatherService.get5DaysWeather(this.localizacion).subscribe( resp => {
      this.forecast = resp;
    });
  }
}
