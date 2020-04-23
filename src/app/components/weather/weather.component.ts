import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherResponse } from 'src/app/interfaces/weather';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input()localizacion:string;
  @Input() actualizarPrediccion: Subject<boolean> = new Subject<boolean>();
  tiempo:WeatherResponse = null;
  imagen_resumen:string = null;
  ahora:Date = new Date();
  constructor(private weatherService:WeatherService) {

  }
  
  ngOnInit(): void {
    console.debug('Estamos en On Init de Weather component');
    this.cargarPrediccion();

    this.actualizarPrediccion.subscribe(response => {
      console.log("Holi!");
      this.cargarPrediccion();
    });
  }


  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }

  private cargarPrediccion(){
    this.weatherService.getWeather(this.localizacion).subscribe( resp => {
      console.debug('Parece que recibo algo en el on Init de TAB1');
      this.ahora = new Date();
      this.tiempo = resp;
      this.imagen_resumen = `https://openweathermap.org/img/wn/${this.tiempo.weather[0].icon}@2x.png`;
      console.log(resp);
    },
    err => {
      this.handleError(err);
    });
  }

}
