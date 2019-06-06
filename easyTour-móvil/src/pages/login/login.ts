import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController, NavParams} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  passwordType: string ='password';
  passwordShown: boolean = false;

 

  user = {email:'andres@gmail.com',password:'123456'}   as User;

  constructor(private fireAuth: AngularFireAuth,private toast: ToastController,public navParams: NavParams,public navCtrl:NavController, public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);

  }

  public togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }else{
      this.passwordShown = true;
      this.passwordType = 'text';
    }
    }
  

 


 //inicio del login
 async login(user: User){

  try{
  const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  if(info){
    await this.navCtrl.setRoot(HomePage); 
  }
}catch(e){
  //console.error(e);
  //notificacion para email y contrasena
  this.toast.create({
    message: "El email y/o la contraseña son invalidos",
    duration: 4000,
    position: 'top',
    cssClass: 'dark-trans',
    closeButtonText: 'OK',
    showCloseButton: true

  }).present();
}
}
   //fin del login


   //inicio del registrar
   register(){
   // this.navCtrl.push('RegisterPage'); //no funciona
    this.navCtrl.setRoot(RegisterPage); //funciona OK
   

  } //fin del registrar

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Olvidaste tu contraseña?',
      message: "Ingresa tu email y te enviaremos un link para restablecer la contraseña.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'El email ha sido enviado satisfactoriamente',
              duration: 4000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
