import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-listado-articulos',
  templateUrl: 'listado-articulos.html',
})
export class ListadoArticulosPage {
  articulos:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  public http: HttpClient,
  public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoArticulosPage');
    this.cargarArticulos()
  }

  
  cargarArticulos(){
    let url ='http://localhost:3000/articulo'
    this.http.get(url)
      .map((res:any)=>{
        return res
      })
      .subscribe((res:any)=>{
       this.articulos = res.articulos
      }, (error)=>{
      console.log(error);
      })//
  }

  verArticulo(articulo){
    this.navCtrl.push('VerArticuloPage', {articulo: articulo})
  }

  crearArticulo(){
    let modal = this.modalCtrl.create('CrearArticuloPage');
    modal.onDidDismiss(()=>{
      this.cargarArticulos();
    })

    modal.present();
    }

    editarArticulo(articulo){
      this.navCtrl.push('EditarArticuloPage', {articulo: articulo})
    }

    eliminarArticulo(id){
      let url = "http://localhost:3000/articulo/" + id;
      this.http.delete(url)
        .subscribe((res:any)=>{
         this.cargarArticulos();
        }, (error)=>{
        console.log(error);
        })//
    }
}
