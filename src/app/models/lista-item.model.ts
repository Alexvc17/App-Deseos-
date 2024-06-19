//acontinuacion crearemos los modelos de como quiero yo organizar la informacion
//esta es una clase comun y corriente

export class ListaItems {

  //descripcion
  desc: string;
  //estado del completado
  completado: boolean;

  constructor(desc: string){
    //aqui pide la desc de tipo string
    //las tareas se van a completar con su estado en falso
    this.desc = desc;
    this.completado = false;
  }

}
