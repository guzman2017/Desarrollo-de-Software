import { Component, OnInit, HostBinding } from '@angular/core';
import { Actividad } from 'src/app/models/Actividad';

import { ActividadesService } from 'src/app/services/actividades.service';
import { ItinerariosService } from 'src/app/services/itinerarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Itinerario } from 'src/app/models/Itinerario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.css']
})
export class ActividadFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  actividad: Actividad = {
    id_act: 0,
    lugar_act: '',
    nombre_act: '',
    descripcion_act: '',
    horainicio_act: '',
    horafin_act: '',
    itinerariofk: -1,
  
  };

  edit: boolean = false;
  itinerarios: Itinerario[]=[];

  constructor(private actividadesService: ActividadesService, private router: Router, private activatedRoute: ActivatedRoute, private itinerariosService: ItinerariosService) { }

  ngOnInit() {
    this.getItinerarios();
    const params = this.activatedRoute.snapshot.params;
    if (params.id_act) {
      this.actividadesService.getActividad(params.id_act)
        .subscribe(
          res => {
            console.log(res);
            this.actividad = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewActividad() {
  
    delete this.actividad.id_act;
    this.actividadesService.saveActividad(this.actividad)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/actividades']);
        },
        err => console.error(err)
      )
  }

  updateActividad() {
  
    this.actividadesService.updateActividad(this.actividad.id_act, this.actividad)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/actividades']);
        },
        err => console.error(err)
      )
  }

  getItinerarios() {
    this.itinerariosService.getItinerarios()
    .subscribe((response:Itinerario[]) =>{
       this.itinerarios=response
       console.log("obtiene itinerarios",this.itinerarios)
    })
  }

  //Modal para el SwetAlert
  showModal(){
    
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Actividad guardada con éxito!',
      showConfirmButton: true,
      timer: 1500
    })
      
      }


}

