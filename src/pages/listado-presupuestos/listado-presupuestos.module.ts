import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoPresupuestosPage } from './listado-presupuestos';

@NgModule({
  declarations: [
    ListadoPresupuestosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoPresupuestosPage),
  ],
})
export class ListadoPresupuestosPageModule {}
