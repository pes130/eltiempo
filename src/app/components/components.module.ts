import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { IonicModule } from '@ionic/angular';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { ForecastComponent } from './forecast/forecast.component';



@NgModule({
  declarations: [
    WeatherComponent,
    ForecastsComponent,
    ForecastComponent
  ],
  exports: [
    WeatherComponent,
    ForecastsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
