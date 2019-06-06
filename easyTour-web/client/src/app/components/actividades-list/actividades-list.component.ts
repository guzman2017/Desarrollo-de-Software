import { Component, OnInit, HostBinding } from '@angular/core';

import { ActividadesService } from '../../services/actividades.service';
import { Actividad } from 'src/app/models/Actividad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividades-list',
  templateUrl: './actividades-list.component.html',
  styleUrls: ['./actividades-list.component.css']
})
export class ActividadesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  actividades: any = [];

  constructor(private actividadesService: ActividadesService) { }
  filterPost = '';
  pageActual: number= 1;
  ngOnInit() {
    this.getActividades();
  }

  getActividades() {
    this.actividadesService.getActividades()
      .subscribe(
        res => {
          this.actividades = res;
        },
        err => console.error(err)
      );
  }

  deleteActividad(id_act: string) {
    this.actividadesService.deleteActividad(id_act)
      .subscribe(
        res => {
          console.log(res);
          this.getActividades();
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

