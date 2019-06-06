import { Component, OnInit, HostBinding } from '@angular/core';

import { PaquetesService } from '../../services/paquetes.service';
import { Paquete } from 'src/app/models/Paquete';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paquetes-list',
  templateUrl: './paquetes-list.component.html',
  styleUrls: ['./paquetes-list.component.css']
})
export class PaquetesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  paquetes: any = [];

  constructor(private paquetesService: PaquetesService) { }
  filterPost = '';
  pageActual: number= 1;
  ngOnInit() {
    this.getPaquetes();
  }

  getPaquetes() {
    this.paquetesService.getPaquetes()
      .subscribe(
        res => {
          this.paquetes = res;
        },
        err => console.error(err)
      );
  }

  deletePaquete(id_paq: string) {
    this.paquetesService.deletePaquete(id_paq)
      .subscribe(
        res => {
          console.log(res);
          this.getPaquetes();
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
