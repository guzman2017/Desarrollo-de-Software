import { Component, OnInit, HostBinding } from '@angular/core';

import { ItinerariosService } from '../../services/itinerarios.service';
import { Itinerario } from 'src/app/models/Itinerario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-itinerarios-list',
  templateUrl: './itinerarios-list.component.html',
  styleUrls: ['./itinerarios-list.component.css']
})
export class ItinerariosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  itinerarios: any = [];

  constructor(private itinerariosService: ItinerariosService) { }
  filterPost = '';
  pageActual: number= 1;
  ngOnInit() {
    this.getItinerarios();
  }

  getItinerarios() {
    this.itinerariosService.getItinerarios()
      .subscribe(
        res => {
          this.itinerarios = res;
        },
        err => console.error(err)
      );
  }

  deleteItinerario(id_it: string) {
    this.itinerariosService.deleteItinerario(id_it)
      .subscribe(
        res => {
          console.log(res);
          this.getItinerarios();
        },
        err => console.error(err)
      )
  }

  //SwetAlert para eliminar
  showModal(){
    Swal.fire({
      title: 'Está seguro?',
      text: "Los cambios serán irreversibles!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
        
          'Eliminado!',
          'Tu registro ha sido borrado!',
          'success'
          
        )
       
      }
    })
  }


}
