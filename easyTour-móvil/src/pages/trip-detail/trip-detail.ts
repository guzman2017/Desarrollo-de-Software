import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";
import { GameProvider } from "../../providers/game/game";
import { ProveedorProvider } from "../../providers/proveedor/proveedor";
//import { ItinerarioPage } from "../itinerario/itinerario";

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {
  

  rate = 0;
  selectStar(i) {
      this.rate = i + 1;
  }
  
  public trip: any;
  // numero de adulto por defecto 1
  public adults = 1;
  // numero de ninos por defecto 0
  public children = 0;
  gamesid= ""
  proveedores = []
  costoproveedor: number= 0;
  constructor(public navCtrl: NavController,
              public nav: NavController,
              public tripService: TripService, 
              public navParams: NavParams, 
              public games: GameProvider, 
              public proveedorService: ProveedorProvider ) {
    
                
                  this.trip = tripService.getItem(1);
                  this.gamesid= this.navParams.get("id");
                  this.games.getGame(this.gamesid).subscribe((game: any) =>{
                  this.trip= game;
                  this.trip.price_child = 7.50;
                  this.trip.price_adult =15;
                  this.getProveedores(game.paquetefk);
                  console.log(game);
                  });
                  console.log(this.gamesid);
                }

  // resta si pulsams el boton -
  minusAdult() {
    this.adults--;
  }

  // suma si pulsamos el boton +
  plusAdult() {
    this.adults++;
  }

  //resta si pulsams el boton -
  minusChildren() {
    this.children--;
  }

  // suma si pulsamos el boton +
  plusChildren() {
    this.children++;
  }

  // Boton (VALOR) dirije al checkout 
  checkout() {
    let objetopago={
      adultos:this.adults,
      ninos: this.children,
      precio: (this.adults* this.trip.price_adult)+(this.children* this.trip.price_child)+(this.costoproveedor)
    }
    this.nav.push(CheckoutTripPage,{datos: objetopago, localidad: this.trip});
  }

  getProveedores(paquetefk: any){
      this.proveedorService.getByPaquetefk(paquetefk).subscribe((proveedores:any)=>{
      this.proveedores=proveedores;
      proveedores.forEach(element => {
         this.costoproveedor += parseInt(element.costo_pro);
          });
          console.log(this.proveedores)
        })
       }

  itinerarioPage() {
    console.log('fff', this.trip)
    this.navCtrl.push("ItinerarioPage", {paquetefk:this.trip.paquetefk, localidad: this.trip});
    
  }
}
