
import { Component, OnInit, HostBinding } from '@angular/core';
import { Guia } from 'src/app/models/Guia';

import { GuiasService } from 'src/app/services/guias.service';
import { PaquetesService } from 'src/app/services/paquetes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Paquete } from 'src/app/models/Paquete';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guia-form',
  templateUrl: './guia-form.component.html',
  styleUrls: ['./guia-form.component.css']
})
export class GuiaFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  guia: Guia = {
    id_guia: 0,
    nombre_guia: '',
    cedula_guia: '',
    idioma_guia: '',
    paquetefk: -1,
    imagen_guia: '',
    
  };

  edit: boolean = false;
  paquetes : Paquete[]=[];

  constructor(private guiasService: GuiasService, private router: Router, private activatedRoute: ActivatedRoute,private paquetesService: PaquetesService) { }

  ngOnInit() {
    this.getPaquetes();
    const params = this.activatedRoute.snapshot.params;
    if (params.id_guia) {
      this.guiasService.getGuia(params.id_guia)
        .subscribe(
          res => {
            console.log(res);
            this.guia = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGuia() {
    
    delete this.guia.id_guia;
    this.guiasService.saveGuia(this.guia)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/guias']);
        },
        err => console.error(err)
      )
  }

  updateGuia() {
  
    this.guiasService.updateGuia(this.guia.id_guia, this.guia)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/guias']);
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
      title: 'Guía turístico guardado con éxito!',
      showConfirmButton: true,
      timer: 1500
    })
      
      }


}

