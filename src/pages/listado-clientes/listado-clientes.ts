import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'; //Ojito que a veces se autoimporta mal
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-listado-clientes',
  templateUrl: 'listado-clientes.html',
})
export class ListadoClientesPage {

  clientes:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoClientesPage');
    this.cargarClientes()
  }

  cargarClientes(){
    let url ='http://localhost:3000/cliente'
    this.http.get(url)
      .map((res:any)=>{
        return res
      })
      .subscribe((res:any)=>{
       this.clientes = res.clientes
      }, (error)=>{
      console.log(error);
      })//
  }

  verCliente(cliente){
    this.navCtrl.push('VerClientePage', {cliente: cliente})
  }

  crearCliente(){
    let modal = this.modalCtrl.create('CrearClientePage');
    modal.onDidDismiss(()=>{
      this.cargarClientes();
    })//le llega el parametro cliente desde dismiss de la página crear cliente; útil para cuando la aplicación no tiene base de datos
    // modal.onDidDismiss(cliente=>{
    //   if (cliente) {
    //     this.clientes.push(cliente)
    //   }
    // })//le llega el parametro cliente desde dismiss de la página crear cliente; útil para cuando la aplicación no tiene base de datos

    modal.present();
    }

    editarCliente(cliente){
      this.navCtrl.push('EditarClientePage', {cliente: cliente})
    }

    eliminarCliente(id){
      let url = "http://localhost:3000/cliente/" + id;
      this.http.delete(url)
        .subscribe((res:any)=>{
         this.cargarClientes();
        }, (error)=>{
        console.log(error);
        })//
    }
}
