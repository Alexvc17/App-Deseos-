import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //aqui dentro del constructor inyecto el servicio
  //aqui tambien inyecto el router de angular
  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController
    ) {

  }

  async agregarLista(){

      //this.router.navigateByUrl('/tabs/tab1/agregar');
      //este es el cuadro flotante que aparece cuando presiono el boton de mas
      //el await espera a que toda la promesa se ejecute y el resultado se almacena en la constante alert
      const alert = await this.alertCtrl.create({
        header: 'Nueva Lista',
        inputs: [
          {
            name:'titulo',
            type:'text',
            placeholder: 'Nombre de la lista'

          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            //su rol es el de cancelar
            role: 'cancel',
            handler: () =>{
              console.log('Cancelar');
            }
          },
          {
            text:'Crear',
            //handler es la funcion que se va a disparar cuando se haga click en el boton
            handler: (data) => {
              console.log(data);
              if (data.titulo.length == 0) {
                return;
              }
              //llamo al servicio y consiguiente al metodo crear lista  de ese servicio y le mando la data, este a su ves me retorna el id
              const listaId = this.deseosService.crearLista(data.titulo);
              console.log(listaId)
              //Cuando creo la lista tengo que hacer la navegacion con el id que me retorno ese metodo de crearLista()
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);

            }
          }
        ],


      });
      alert.present();
  }



}
