
import { Component, OnInit, HostBinding } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

import { CategoriasService } from 'src/app/services/categorias.service';
import { PuntosService } from 'src/app/services/puntos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Punto } from 'src/app/models/Punto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  categoria: Categoria = {
    id_cat: 0,
    nombre_cat: '',
    puntosfk: -1,
    
  };

  edit: boolean = false;
  puntos : Punto[]=[];

  constructor(private categoriasService: CategoriasService, private router: Router, private activatedRoute: ActivatedRoute, private servicepuntos: PuntosService ) { }

  ngOnInit() {
    this.getPuntos()
    const params = this.activatedRoute.snapshot.params;
    if (params.id_cat) {
      this.categoriasService.getCategoria(params.id_cat)
        .subscribe(
          res => {
            console.log(res);
            this.categoria = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewCategoria() {
    
    delete this.categoria.id_cat;
    this.categoriasService.saveCategoria(this.categoria)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/categorias']);
        },
        err => console.error(err)
      )
  }

  updateCategoria() {
   
    this.categoriasService.updateCategoria(this.categoria.id_cat, this.categoria)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/categorias']);
        },
        err => console.error(err)
      )
  }


  
  getPuntos() {
    this.servicepuntos.getPuntos()
    .subscribe((response:Punto[]) =>{
       this.puntos=response
       console.log("datos de puntos",this.puntos)
    })
  }

  //Modal para el SwetAlert
  showModal(){
    
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Categoría guardada con éxito!',
      showConfirmButton: true,
      timer: 1500
    })
      
      }


}
