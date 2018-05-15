import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPresupuestoPage } from './editar-presupuesto';

@NgModule({
  declarations: [
    EditarPresupuestoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarPresupuestoPage),
  ],
})
export class EditarPresupuestoPageModule {}
