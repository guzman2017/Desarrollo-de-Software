import { Component, OnInit, HostBinding } from '@angular/core';
import { Especie } from 'src/app/models/Especie';

import { EspeciesService } from 'src/app/services/especies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Proveedor } from 'src/app/models/Proveedor';
import { PaquetesService } from 'src/app/services/paquetes.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-especie-form',
  templateUrl: './especie-form.component.html',
  styleUrls: ['./especie-form.component.css']
})
export class EspecieFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  especie: Especie = {
    id_es: 0,
    nombre_es: '',
    proveedorfk: -1,
   
   
  };

  edit: boolean = false;
  proveedores : Proveedor[]=[];

  constructor(private especiesService: EspeciesService, private router: Router, private activatedRoute: ActivatedRoute, private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.getProveedores();
    const params = this.activatedRoute.snapshot.params;
    if (params.id_es) {
      this.especiesService.getEspecie(params.id_es)
        .subscribe(
          res => {
            console.log(res);
            this.especie = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewEspecie() {
    
    delete this.especie.id_es;
    this.especiesService.saveEspecie(this.especie)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/especies']);
        },
        err => console.error(err)
      )
  }

  updateEspecie() {
   
    this.especiesService.updateEspecie(this.especie.id_es, this.especie)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/especies']);
        },
        err => console.error(err)
      )
  }

  getProveedores() {
    this.proveedoresService.getProveedores()
    .subscribe((response:Proveedor[]) =>{
       this.proveedores=response
       console.log("obtiene especies",this.proveedores)
    })
  }
  //Modal para el SwetAlert
  showModal(){
    
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Tipo de proveedor guardado con éxito!',
      showConfirmButton: true,
      timer: 1500
    })
      
      }


}

