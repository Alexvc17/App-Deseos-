import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    //si quiero que me dirija a la pagina agregar luego de crear la lista entonces debo agregar la ruta al path
    //le mando el parametro que se va a esperar
     path: 'agregar/:listaId',

     loadChildren: () => import('../agregar/agregar.module').then(m => m.AgregarPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
