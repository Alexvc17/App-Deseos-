import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //aqui dentro del constructor inyecto el servicio y va a ser de forma global para que mi servicio comparta toda la infirmacion con todas las tabs
  constructor(public deseosService: DeseosService) {



  }

}
