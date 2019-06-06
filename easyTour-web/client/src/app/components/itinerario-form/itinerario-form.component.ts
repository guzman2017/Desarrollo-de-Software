
import { Component, OnInit, HostBinding } from '@angular/core';
import { Itinerario } from 'src/app/models/Itinerario';

import { ItinerariosService } from 'src/app/services/itinerarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-itinerario-form',
  templateUrl: './itinerario-form.component.html',
  styleUrls: ['./itinerario-form.component.css']
})
export class ItinerarioFormComponent implements OnInit {
  public minDate: Date = new Date ("05/07/2017");
  public maxDate: Date = new Date ("05/27/2020");
  public value: Date = new Date ("01/01/2019");

  @HostBinding('class') clases = 'row';

  itinerario: Itinerario = {
    id_it: 0,
    fecha_it: new Date(),
    duracion_it: '',
    riesgo_it: '',
    advertencia_it: '',
    vacunas_it: ''
  
  };

  edit: boolean = false;

  constructor(private itinerariosService: ItinerariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id_it) {
      this.itinerariosService.getItinerario(params.id_it)
        .subscribe(
          res => {
            console.log(res);
            this.itinerario = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewItinerario() {
 
    delete this.itinerario.id_it;
    this.itinerariosService.saveItinerario(this.itinerario)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/itinerarios']);
        },
        err => console.error(err)
      )
  }

  updateItinerario() {
   
    this.itinerariosService.updateItinerario(this.itinerario.id_it, this.itinerario)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/itinerarios']);
        },
        err => console.error(err)
      )
  }

  //Modal para el SwetAlert
  showModal(){
    
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Itinerario guardado con éxito!',
      showConfirmButton: true,
      timer: 1500
    })
      
      }


}
