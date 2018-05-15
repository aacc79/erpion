import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-crear-articulo',
  templateUrl: 'crear-articulo.html',
})
export class CrearArticuloPage {
  articulo = {
    referencia:null,
    precio:null,
  }
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearArticuloPage');
  }

  crearArticulo(){
    let articulo = {
      referencia: this.articulo.referencia,
      precio: this.articulo.precio
    }
    let url = 'http://localhost:3000/articulo';
    this.http.post(url, articulo)
      .subscribe((res:any)=>{
        //this.viewCtrl.dismiss(cliente);
        this.viewCtrl.dismiss();
      }, (error)=>{
      console.log(error);
      })//
  }

  cancelar(){
    this.viewCtrl.dismiss()
  }
}

