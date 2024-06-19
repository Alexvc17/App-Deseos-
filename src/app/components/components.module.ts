import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
//commom modulo tiene ngfor, ngif etc


//ng module es el decorador
@NgModule({
  declarations: [
    ListasComponent,
  ],
  exports: [
    //este componente se va a usar fuera del modulo
    ListasComponent
  ],
  imports: [
    CommonModule,
    //hay que importar el ionicmodule
    IonicModule,
    PipesModule
  ],

})
export class ComponentsModule { }
