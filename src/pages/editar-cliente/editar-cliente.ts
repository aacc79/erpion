import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-editar-cliente',
  templateUrl: 'editar-cliente.html',
})
export class EditarClientePage {
  cliente:any;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    public viewCtrl: ViewController,
  public http: HttpClient) {
    this.cliente = this.navParams.get('cliente')//cuando la página cargue, en cliente tenemos lo del push anterior
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarClientePage');
  }

  modificarCliente(){
    let cliente = {
      id:this.cliente._id,//a diferencia de en crear, aquí cargamos el id, porque nos lo exige el put del backend
      nombre: this.cliente.nombre,
      cif: this.cliente.cif,
      domicilio: this.cliente.nombre,
      cp: this.cliente.cp,
      localidad: this.cliente.localidad,
      provincia: this.cliente.provincia,
      telefono: this.cliente.telefono,
      email: this.cliente.email,
      contacto: this.cliente.contacto
    }
    let url = 'http://localhost:3000/cliente/' + cliente.id;
    this.http.put(url, cliente)
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
