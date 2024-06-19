import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';




@NgModule({
  declarations: [FiltroCompletadoPipe],
  //este filtro lo voy a usar en otros componentes tendre que exportarlo
  exports: [FiltroCompletadoPipe]
})
export class PipesModule { }
