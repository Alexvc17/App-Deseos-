import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItems } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista?: Lista;
  nombreItem = "";

  constructor( private deseosService: DeseosService,
               private route: ActivatedRoute) {

    //nos creamos una constante llamada id , como no quiero un observable uso snapshot
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista(listaId || 0);


  }

  ngOnInit() {
  }

  agregarItem(){
    //si la persona no escribio nada, osea que si el  largor del array es igual a 0
    if(this.nombreItem.length == 0){
      return;
    }

    //creare un objeto de tipo lista item , ya que las listas son objetos de items
    const nuevoItem = new ListaItems(this.nombreItem);
    this.lista?.items.push(nuevoItem);

    //para que aparezca vacio nuevamente
    this.nombreItem = "";
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItems){
    //console.log(item)
    //filter me retornara una coleccion de elementos que cumplan una condicion
    //has la validacion del arreglo y dime cuantos elementos hay
    //estamos accediendo desde lista
    const pendientes = this.lista?.items.filter( itemData => !itemData.completado).length;
    //en pendiente me almacenara el numero de elementos que hay en el arreglo, aquellos que esten marcados como falsos
                                  //{'L1', 'L2', 'L3'} me almacenara 3
                                  //{'L1', 'L2'} me almacenara 2
                                  //{'L1'} me almacenara 2

    console.log({pendientes})

    if(pendientes == 0){ //osea que si completo todas las tareas

      this.lista!.terminadaEn = new Date();
      this.lista!.terminada = true;

    }else{
      if(pendientes != 0){

      this.lista!.terminadaEn = new Date(NaN);
      this.lista!.terminada = false;

      }
    }

    //con eso guardamos el checkbox en el localstorage
    this.deseosService.guardarStorage();
    console.log(this.deseosService.listas);
  }


  borrar(pos: number){
    //splice es una funcion de javascript que me permite eliminar items del arreglo
                      //desde que posicion quiero borrar
                      //desde pos y solo 1 item quiero borrar
    this.lista?.items.splice(pos, 1);
    this.deseosService.guardarStorage();
  }

}
