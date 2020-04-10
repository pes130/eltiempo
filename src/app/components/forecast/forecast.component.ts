import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/interfaces/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() prediccion:List = null;

  constructor() { }

  ngOnInit() {}

}
