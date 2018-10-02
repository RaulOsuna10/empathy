import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//providers
import { UsuarioProvider } from '../../providers/usuario/usuario';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  constructor(public navCtrl: NavController, _usuarioProvider:UsuarioProvider) {
    console.log(_usuarioProvider.usuario)
  }

}
