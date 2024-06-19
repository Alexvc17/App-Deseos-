import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  //para que angular me detecte el cambio instantaneamente en todos los modulos
  //por default viene en true, lo que hace que el cambio solo suceda dentro del mismo componentes
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {
//tendremos que recibir el arreglo de listas no importa si estan completadas o no
// y mediante un argumento retornare las que estan terminadas o pendientes
  transform(listas : Lista[], completada: boolean = true): Lista[] {

    return listas.filter(lista => lista.terminada === completada);



  }

}
