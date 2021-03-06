import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ventas',
  templateUrl: 'ventas.html',
})
export class VentasPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
  }

  goToClientes(){
    this.navCtrl.push('ListadoClientesPage')
  }
  
  goToArticulos(){
    this.navCtrl.push('ListadoArticulosPage')
  }
  goToPresupuestos(){
    this.navCtrl.push('ListadoPresupuestosPage')
  }
}
