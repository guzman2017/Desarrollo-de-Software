import {Component, AfterViewChecked} from "@angular/core";
import {NavController, LoadingController, ToastController, NavParams} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {HomePage} from "../home/home";
declare let paypal: any;
@Component({
  selector: 'page-checkout-trip',
  templateUrl: 'checkout-trip.html'
})
export class CheckoutTripPage implements AfterViewChecked {
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;
 
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AYuKqqzI0ZJmx-uojt1GPfRo4zWFy1AYlbzVmdfSS8b55u06HwNcmJfF2YvOHxx82kQ-x677FIVuAapi'
      //production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.datos.precio, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
       
         // Mensaje de Transacion realizada
    let toast = this.toastCtrl.create({
      showCloseButton: true,
     
      message: 'Transacción realizada Exitosamente!',
      duration: 4000,
      position: 'down',
      cssClass: 'dark-trans',
      closeButtonText: 'OK',
      
    });

    setTimeout(() => {
      //loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot(HomePage);
    }, 3000)

      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
  //FINAL PAYPAL
  // trip data
  public trip: any;
  // Numero de adultos valor quemado
  public adults = 2;
  // date
  public date = new Date();

  public paymethods = 'creditcard';
 datos: any;
  constructor(public nav: NavController, public navParams: NavParams ,  public tripService: TripService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // set sample data
    this.trip = this.navParams.get("localidad");
    this.datos = this.navParams.get("datos");
  }

  // Proceso del boton Enviar 
  send() {
    // Cargando transacion...
    let loader = this.loadingCtrl.create({
      content: "Por favor espere..."
    });
    // Mensaje de Transacion realizada
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      //cssClass: 'profile-bg',
      message: 'Transacción realizada Exitosamente!',
      duration: 4000,
      position: 'down',
      cssClass: 'dark-trans',
      closeButtonText: 'OK',
      
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot(HomePage);
    }, 3000)
  }

  

}
