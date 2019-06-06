import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Storage} from '@ionic/storage';
import { PaqueteProvider } from "../../providers/paquete/paquete";

// import {SearchCarsPage} from "../search-cars/search-cars";

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})

export class SearchLocationPage {
  public fromto: any;
  ciudades= [];
  // Agregando ciudades de Ecuador
  public places = {
    nearby: [
      
      {
        id: 1,
        name: "Quito, EC"
      },
      {
        id: 2,
        name: "Guayaquil, EC"
      },
      {
        id: 3,
        name: "Cuenca, EC"
      },
      {
        id: 4,
        name: "Ambato, EC"
      },
      {
        id: 5,
        name: "Ibarra, EC"
      }
    ],
    recent: [
      {
        id: 1,
        name: "Quito, EC"
      }
    ]
  };

  constructor(private storage: Storage, public nav: NavController, public navParams: NavParams  , public paqueteProvider: PaqueteProvider) {
    this.fromto = this.navParams.data;
    this.getCiudades();
  }

  // search by item
  searchBy(item) {
    if (this.fromto === 'from') {
      this.storage.set('pickup',{nombre: item.ciudad_paq, id: item.id_paq} );
    }

    if (this.fromto === 'to') {
      this.storage.set('dropOff', item.ciudad_paq);
    }
    // this.nav.push(SearchCarsPage);
    this.nav.pop();
  }
  getCiudades(){
    this.paqueteProvider.getPaquetes().subscribe((ciudades:any)=>{
     this.ciudades= ciudades 
     console.log(ciudades);
    })
  }
}
