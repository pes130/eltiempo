import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {
  actualizarPrediccion: Subject<boolean> = new Subject<boolean>();
  localizacion:string = 'Almería';

  constructor() {

  }

  ionViewWillEnter() {
    console.log("Ueeeee estoy en el ionviewwillenter");
  } 

  doRefresh(event) {
    console.log('Begin async operation');
    this.actualizarPrediccion.next(true);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
 
}
