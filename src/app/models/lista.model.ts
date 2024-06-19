import { ListaItems } from "./lista-item.model";

//esta lista tiene informacion sobre toda las tareas que quiero asignar
export class Lista{

  id: number;
  titulo: string;
  creadaEn: Date;
  terminadaEn: Date;
  //boolean cambiara sun valor cuando tenga todos los items completados

  terminada: boolean;
  items: ListaItems[];

  constructor(titulo: string){

    this.titulo = titulo;
    //se me creara un nuevo objeto de tipo fecha
    this.creadaEn = new Date();
    this.terminadaEn = new Date();
    this.terminada = false;
    this.items = [];

    this.id = new Date().getTime();

  }

}
