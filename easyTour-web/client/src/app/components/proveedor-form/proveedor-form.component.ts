
import { Component, OnInit, HostBinding } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';

import { ProveedoresService } from 'src/app/services/proveedores.service';
import {PaquetesService} from 'src/app/services/paquetes.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Paquete } from 'src/app/models/Paquete';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css']
})
export class ProveedorFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  proveedor: Proveedor = {
    id_pro: 0,
    nombre_pro: '',
    lugar_pro: '',
    telefono_pro: '',
    email_pro: '',
    descripcion_pro: '',
    foto_pro: '',
    costo_pro: '',
    paquetefk: -1,
    
  };

  edit: boolean = false;
  paquetes: Paquete[] =[];

  constructor(private proveedoresService: ProveedoresService, private router: Router, private activatedRoute: ActivatedRoute, private paquetesService: PaquetesService) { }

  ngOnInit() {
    this.getPaquetes()
    const params = this.activatedRoute.snapshot.params;
    if (params.id_pro) {
      this.proveedoresService.getProveedor(params.id_pro)
        .subscribe(
          res => {
            console.log(res);
            this.proveedor = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewProveedor() {
    
    delete this.proveedor.id_pro;
    this.proveedoresService.saveProveedor(this.proveedor)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/proveedores']);
        },
        err => console.error(err)
      )
  }

  updateProveedor() {
    
    this.proveedoresService.updateProveedor(this.proveedor.id_pro, this.proveedor)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/proveedores']);
        },
        err => console.error(err)
      )
  }
  getPaquetes() {
    this.paquetesService.getPaquetes()
    .subscribe((response:Paquete[]) =>{
       this.paquetes=response
       console.log("obtiene paquetes",this.paquetes)
    })
  }
//Modal para el SwetAlert
showModal(){
    
  Swal.fire({
    position: 'center',
    type: 'success',
    title: 'Proveedor guardado con éxito!',
    showConfirmButton: true,
    timer: 1500
  })
    
    }

}
