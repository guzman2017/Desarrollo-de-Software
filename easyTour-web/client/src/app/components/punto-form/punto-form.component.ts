

import { Component, OnInit, HostBinding } from '@angular/core';
import { Punto } from 'src/app/models/Punto';

import { PuntosService } from 'src/app/services/puntos.service';
import {GamesService} from 'src/app/services/games.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/Game';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-punto-form',
  templateUrl: './punto-form.component.html',
  styleUrls: ['./punto-form.component.css']
})
export class PuntoFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  punto: Punto = {
    id_pun: 0,
    nombre_pun: '',
    descripcion_pun: '',
    direccion_pun: '',
    imagen_pun: '',
    localidadfk: -1 ,
    created_at_pun: new Date()
  };

  edit: boolean = false;
 localidades : Game[]=[];

  constructor(private puntoService: PuntosService, private router: Router, private activatedRoute: ActivatedRoute, private serviceLocalidad: GamesService ) { }

  ngOnInit() {
    this.getGames()
    const params = this.activatedRoute.snapshot.params;
    if (params.id_pun) {
      this.puntoService.getPunto(params.id_pun)
        .subscribe(
          res => {
            console.log(res);
            this.punto = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewPunto() {
    delete this.punto.created_at_pun;
    delete this.punto.id_pun;
    this.puntoService.savePunto(this.punto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/puntos']);
        },
        err => console.error(err)
      )
  }

  updatePunto() {
    delete this.punto.created_at_pun;
    this.puntoService.updatePunto(this.punto.id_pun, this.punto)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/puntos']);
        },
        err => console.error(err)
      )
  }

  getGames() {
    this.serviceLocalidad.getGames()
    .subscribe((response:Game[]) =>{
       this.localidades=response
       console.log("obtiene puntos",this.localidades)
    })
  }

  //Modal para el SwetAlert
  showModal(){
    
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Punto de interés guardado con éxito!',
      showConfirmButton: true,
      timer: 1500
    })
      
      }


}
