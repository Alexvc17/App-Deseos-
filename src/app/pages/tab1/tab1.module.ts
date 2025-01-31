import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  //aqui declaro componentes que pertenecen a otros modulos "ListasComponent"
  //------------------- TENER MUY ENCUENTA QUE ----------------------
  //No se puede declarar el mismo componente en dos modulos separados
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
