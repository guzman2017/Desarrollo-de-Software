import { Component, OnInit, HostBinding } from '@angular/core';
import { Paquete } from 'src/app/models/Paquete';

import { PaquetesService } from 'src/app/services/paquetes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { Itinerario } from 'src/app/models/Itinerario';
import { GamesService } from 'src/app/services/games.service';
import { ItinerariosService } from 'src/app/services/itinerarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paquete-form',
  templateUrl: './paquete-form.component.html',
  styleUrls: ['./paquete-form.component.css']
})
export class PaqueteFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  paquete: Paquete = {
    id_paq: 0,
    ciudad_paq: '',
    //localidadfk: -1,
    itinerariofk: -1
  };

  edit: boolean = false;
  localidades : Game[]=[];
  itinerarios : Itinerario[]=[];
  

  constructor(private paquetesService: PaquetesService, private router: Router, private activatedRoute: ActivatedRoute, private serviceLocalidad: GamesService , private itineariosServices: ItinerariosService ) { }

  ngOnInit() {
    this.getGames()
    this.getItinerarios()
    const params = this.activatedRoute.snapshot.params;
    if (params.id_paq) {
      this.paquetesService.getPaquete(params.id_paq)
        .subscribe(
          res => {
            console.log(res);
            this.paquete = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewPaquete() {
   
    delete this.paquete.id_paq;
    this.paquetesService.savePaquete(this.paquete)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/paquetes']);
        },
        err => console.error(err)
      )
  }

  updatePaquete() {
   
    this.paquetesService.updatePaquete(this.paquete.id_paq, this.paquete)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/paquetes']);
        },
        err => console.error(err)
      )
  }

  ///
  
  getGames() {
    this.serviceLocalidad.getGames()
    .subscribe((response:Game[]) =>{
       this.localidades=response
       console.log("obtenido localidad",this.localidades)
    })
  }
  ///
  
  getItinerarios() {
    this.itineariosServices.getItinerarios()
    .subscribe((response:Itinerario[]) =>{
       this.itinerarios=response
       console.log("obtenido itinerario",this.itinerarios)
    })
  }

  //Modal para el SwetAlert
  showModal(){
    
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Ciudad guardada con éxito!',
      showConfirmButton: true,
      timer: 1500
    })
      
      }


}

