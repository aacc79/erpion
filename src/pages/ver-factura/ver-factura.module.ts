import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerFacturaPage } from './ver-factura';

@NgModule({
  declarations: [
    VerFacturaPage,
  ],
  imports: [
    IonicPageModule.forChild(VerFacturaPage),
  ],
})
export class VerFacturaPageModule {}
