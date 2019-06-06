import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItinerarioProvider } from '../../providers/itinerario/itinerario';
import { GuiaProvider } from '../../providers/guia/guia';
import { ActividadesProvider } from '../../providers/actividades/actividades';
import { PaqueteProvider } from '../../providers/paquete/paquete';
import { TripService } from '../../services/trip-service';
import { GameProvider } from '../../providers/game/game';

@IonicPage()
@Component({
  selector: 'page-itinerario',
  templateUrl: 'itinerario.html',
})
export class ItinerarioPage {
    paquetefk: any;
    paquete: any;
    itinerario: any;
    actividades:any;
    guias: any;
    public trip: any;
    datos: any;

    constructor(public navCtrl: NavController,
             public navParams: NavParams , 
             public paqueteProvider: PaqueteProvider,
             public itinerarioProvider: ItinerarioProvider, 
             public guiaProvider: GuiaProvider, 
             public actividadesProvider: ActividadesProvider ,
             public tripService: TripService,
             public games: GameProvider) {

              this.trip = this.navParams.get("localidad");
              this.datos = this.navParams.get("datos");

    this.paquetefk= this.navParams.get("paquetefk");
    this.paqueteProvider.getPaquete(this.paquetefk).flatMap((paquete)=>{
    this.paquete= paquete;

        return this.itinerarioProvider.getItinerario(this.paquete.itinerariofk)
        }).flatMap((itinerario)=>{
          console.log("itinerario",itinerario)
        this.itinerario=itinerario;

              return this.actividadesProvider.getActividadesByItinerariofk(this.itinerario.id_it);
              }).flatMap((actividades)=>{
              console.log("actividades",actividades)
              this.actividades=actividades;

                return this.guiaProvider.getGuiasBypaquetefk(this.paquetefk)
                }).subscribe((guias)=>{
                this.guias= guias;
                console.log("guias", guias)
    })
  }
}
