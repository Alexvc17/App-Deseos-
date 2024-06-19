import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';



@Injectable({
  providedIn: 'root'
})
export class DeseosService {


  //aqui creamos una propiedad listas  de tipo Lista[]
  listas: Lista[] = [];

  constructor() {
    //aqui se llama el metodo cargarStorage porque este constructor del servicio es el primero que se ejecuta una sola unica vez
    this.cargarStorage();
  }

  //este metodo recibira el titulo de lista de tipo string
  crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
  //llama el metodo y guarda la lista en el localStorage
    this.guardarStorage();

    return nuevaLista.id;

  }

  borrarLista(lista: Lista){
    //retorna elementos que coincidan con una condicion
    //remplazare el arreglo listas, por el filtro que me retornara aquellos id que sean diferentes del que recibe,
    //a los que estan en el arreglo lista
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
    //luego guardo ese arreglo en el localStorage
    this.guardarStorage();

  }

  obtenerLista(id: string|number){

    //tengo que asegurarle que voy a trabajar  el id como numero usando Number
    id = Number(id);

    //uso la funcion  find de los arreglos
    return this.listas.find(listaData  => listaData.id === id);



  }

  // editarLista(titulo:string | undefined, nuevoTitulo: string){

  //   const listaEditar =  this.listas.find(i  => i.titulo === titulo);

  //   if (listaEditar != null) {

  //     listaEditar.titulo = nuevoTitulo;
  //     this.guardarStorage();


  //   }else{
  //     console.warn("lista no encontrada")
  //   }

  // }

  //para guardar la información
  guardarStorage(){
    //como parametro se crea una llave llamada data , y se agrega la info.. pero debo pasarla a string
    //entonces uso la funcion JSON.stringfy(this.listas),, me convierte un objeto en un json de tipo string
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    const data = localStorage.getItem('data');
    if (data !== null) {
      //transforma la cadena JSON almacenada en el LocalStorage y la convierte en un objeto de JavaScript
      this.listas = JSON.parse(data);
    } else {
      this.listas = [];
    }
  }


}
