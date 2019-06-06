import {Component} from "@angular/core";
import {NavController,ToastController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user = {} as User;

  constructor(private fireAuth: AngularFireAuth,private toast: ToastController,public navCtrl: NavController, public nav: NavController) {
  }

  //inicio del registrar
  async register(user: User){

    try{
    const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    if(info){
      this.navCtrl.setRoot(LoginPage);
    }
  }catch(e){
    //console.error(e);
    this.toast.create({
      message: "Todos los campos son obligatorios y la contraseña debe tener mínimo 6 caracteres",
      duration: 4000,
      position: 'top',
      cssClass: 'dark-trans',
      closeButtonText: 'OK',
      showCloseButton: true
  
    }).present();
  }
  }//fin del registrar

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
