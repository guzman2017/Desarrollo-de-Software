
import { Component, OnInit, HostBinding } from '@angular/core';

import { ProveedoresService } from '../../services/proveedores.service';
import { Game } from 'src/app/models/Game';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedores-list.component.html',
  styleUrls: ['./proveedores-list.component.css']
})
export class ProveedoresListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  proveedores: any = [];

  constructor(private proveedoresService: ProveedoresService) { }
  filterPost = '';
  pageActual: number= 1;
  ngOnInit() {
    this.getProveedores();
  }

  getProveedores() {
    this.proveedoresService.getProveedores()
      .subscribe(
        res => {
          this.proveedores = res;
        },
        err => console.error(err)
      );
  }

  deleteProveedor(id_pro: string) {
    this.proveedoresService.deleteProveedor(id_pro)
      .subscribe(
        res => {
          console.log(res);
          this.getProveedores();
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

