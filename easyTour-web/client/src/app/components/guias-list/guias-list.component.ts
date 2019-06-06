import { Component, OnInit, HostBinding } from '@angular/core';

import { GuiasService } from '../../services/guias.service';
import { Guia } from 'src/app/models/Guia';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guias-list',
  templateUrl: './guias-list.component.html',
  styleUrls: ['./guias-list.component.css']
})
export class GuiasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  guias: any = [];

  constructor(private guiasService: GuiasService) { }
  filterPost = '';
  pageActual: number = 1;
  ngOnInit() {
    this.getGuias();
  }

  getGuias() {
    this.guiasService.getGuias()
      .subscribe(
        res => {
          this.guias = res;
        },
        err => console.error(err)
      );
  }

  deleteGuia(id_guia: string) {
    this.guiasService.deleteGuia(id_guia)
      .subscribe(
        res => {
          console.log(res);
          this.getGuias();
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

