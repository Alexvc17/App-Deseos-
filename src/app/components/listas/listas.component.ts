import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent  implements OnInit {

  //para saber en que momento tengo que redireccionar la ruta al tab1 o al tab2
  @Input() terminada = true;
  //le pasare como parametro  el componente ionlist,
  @ViewChild(IonList) lista?: IonList;

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController,
              private route: ActivatedRoute
    ){



     }

  ngOnInit() {}

  listaSeleccionada(lista: Lista){

    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrar( lista: Lista ){

    this.deseosService.borrarLista(lista);
  }

  async editar(lista: Lista){






      //el await espera a que toda la promesa se ejecute y el resultado se almacena en la constante alert
      const alert = await this.alertCtrl.create({
        header: 'Editar lista',
        inputs: [
          {
            name:'titulo',
            type:'text',
            value: lista.titulo,


          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            //su rol es el de cancelar
            role: 'cancel',

            handler: () =>{
              console.log('Cancelar');
              this.lista?.closeSlidingItems();
            }
          },
          {
            text:'Editar',
            //handler es la funcion que se va a disparar cuando se haga click en el boton
            handler: (data) => {
              console.log(data);
              if (data.titulo.length == 0) {
                return;
              }


              //llamo al servicio y consiguiente al metodo crear lista  de ese servicio y le mando la data, este a su ves me retorna el id
              lista.titulo = data.titulo;
              this.deseosService.guardarStorage();
              //aqui cerramos todos los elementos abiertos
              this.lista?.closeSlidingItems();

            }
          }
        ],


      });
      alert.present();
  }

}
