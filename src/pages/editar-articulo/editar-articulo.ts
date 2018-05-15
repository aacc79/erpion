import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-editar-articulo',
  templateUrl: 'editar-articulo.html',
})
export class EditarArticuloPage {
articulo:any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public http: HttpClient) {
    this.articulo = this.navParams.get('articulo')//cuando la página cargue, en articulo tenemos lo del push anterior
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarArticuloPage');
  }

  modificarArticulo(){
    let articulo = {
      id:this.articulo._id,//a diferencia de en crear, aquí cargamos el id, porque nos lo exige el put del backend
      referencia: this.articulo.referencia,
      precio: this.articulo.precio
    }
    let url = 'http://localhost:3000/articulo/' + articulo.id;
    this.http.put(url, articulo)
      .subscribe((res:any)=>{
        this.viewCtrl.dismiss();
      }, (error)=>{
      console.log(error);
      })//
  }

  cancelar(){
    this.viewCtrl.dismiss()
  }
}
