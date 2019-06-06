
import { Component, OnInit, HostBinding } from '@angular/core';

import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from 'src/app/models/Categoria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  categorias: any = [];

  constructor(private categoriasService:  CategoriasService) { }
  filterPost = '';
  pageActual: number= 1;
  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriasService.getCategorias()
      .subscribe(
        res => {
          this.categorias = res;
        },
        err => console.error(err)
      );
  }

  deleteCategoria(id_cat: string) {
    this.categoriasService.deleteCategoria(id_cat)
      .subscribe(
        res => {
          console.log(res);
          this.getCategorias();
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


