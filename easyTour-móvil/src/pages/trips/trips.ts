import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import { GameProvider } from "../../providers/game/game";
import { PaqueteProvider } from "../../providers/paquete/paquete";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;
  listalocalidades: any= []  //poner el nombre del modelo entre corchetes
  paqueteId= ""
  constructor(public nav: NavController, public tripService: TripService, public games: GameProvider, public navParams: NavParams, public paqueteServices: PaqueteProvider) {
    // set sample data
    this.trips = tripService.getAll();
    this.getLocalidades();
    this.paqueteId=this.navParams.get("localidadId")
    console.log("paquete id es",this.paqueteId);
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }
   
  getLocalidades(){
    console.log("entro en get localidades")
    this.games.getListByPaquetefk(this.navParams.get("localidadId")).subscribe((localidades: any)=>{
      this.listalocalidades = localidades;
      console.log('lista de localidades ', this.listalocalidades)
    })
  }
}
