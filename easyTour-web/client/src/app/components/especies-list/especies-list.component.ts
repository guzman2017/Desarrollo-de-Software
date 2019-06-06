
import { Component, OnInit, HostBinding } from '@angular/core';

import { EspeciesService } from '../../services/especies.service';
import { Especie } from 'src/app/models/Especie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-especies-list',
  templateUrl: './especies-list.component.html',
  styleUrls: ['./especies-list.component.css']
})
export class EspeciesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  especies: any = [];

  constructor(private especiesService: EspeciesService) { }
  filterPost = '';
  pageActual: number= 1;
  ngOnInit() {
    this.getEspecies();
  }

  getEspecies() {
    this.especiesService.getEspecies()
      .subscribe(
        res => {
          this.especies = res;
        },
        err => console.error(err)
      );
  }

  deleteEspecie(id_es: string) {
    this.especiesService.deleteEspecie(id_es)
      .subscribe(
        res => {
          console.log(res);
          this.getEspecies();
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

