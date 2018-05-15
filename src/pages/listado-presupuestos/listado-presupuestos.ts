import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'; //Ojito que a veces se autoimporta mal
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-listado-presupuestos',
  templateUrl: 'listado-presupuestos.html',
})
export class ListadoPresupuestosPage {
presupuestos:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPresupuestosPage');
    this.cargarPresupuestos()
  }

  
  cargarPresupuestos(){
    let url ='http://localhost:3000/presupuesto'
    this.http.get(url)
      .map((res:any)=>{
        return res
      })
      .subscribe((res:any)=>{
       this.presupuestos = res.presupuestos
      }, (error)=>{
      console.log(error);
      })//
  }

  verPresupuesto(presupuesto){
    this.navCtrl.push('VerPresupuestoPage', {presupuesto: presupuesto})
  }

  crearPresupuesto(){
    let modal = this.modalCtrl.create('CrearPresupuestoPage');
    modal.onDidDismiss(()=>{
      this.cargarPresupuestos();
    })//le llega el parametro presupuesto desde dismiss de la página crear presupuesto; útil para cuando la aplicación no tiene base de datos
    // modal.onDidDismiss(presupuesto=>{
    //   if (presupuesto) {
    //     this.presupuestos.push(presupuesto)
    //   }
    // })//le llega el parametro presupuesto desde dismiss de la página crear presupuesto; útil para cuando la aplicación no tiene base de datos

    modal.present();
    }

    editarPresupuesto(presupuesto){
      this.navCtrl.push('EditarPresupuestoPage', {presupuesto: presupuesto})
    }

    eliminarPresupuesto(id){
      let url = "http://localhost:3000/presupuesto/" + id;
      this.http.delete(url)
        .subscribe((res:any)=>{
         this.cargarPresupuestos();
        }, (error)=>{
        console.log(error);
        })//
    }
}