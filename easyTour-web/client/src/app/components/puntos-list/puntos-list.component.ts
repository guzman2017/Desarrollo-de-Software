

import { Component, OnInit, HostBinding } from '@angular/core';

import { PuntosService } from '../../services/puntos.service';
import { Game } from 'src/app/models/Game';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-puntos-list',
  templateUrl: './puntos-list.component.html',
  styleUrls: ['./puntos-list.component.css']
})
export class PuntosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  puntos: any = [];

  constructor(private puntosService:  PuntosService) { }
  filterPost = '';
  pageActual: number= 1;
  ngOnInit() {
    this.getPuntos();
  }

  getPuntos() {
    this.puntosService.getPuntos()
      .subscribe(
        res => {
          this.puntos = res;
        },
        err => console.error(err)
      );
  }

  deletePunto(id_pun: string) {
    this.puntosService.deletePunto(id_pun)
      .subscribe(
        res => {
          console.log(res);
          this.getPuntos();
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
          'success',
          
        )
        
      }
    })
  }


}

