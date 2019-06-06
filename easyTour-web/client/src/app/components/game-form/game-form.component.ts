import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import Swal from 'sweetalert2';

import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PaquetesService } from 'src/app/services/paquetes.service';
import { Paquete } from 'src/app/models/Paquete';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  


  @HostBinding('class') clases = 'row';

  game: Game = {
    id: 0,
    lugar_loc: '',
    descripcion_loc: '',
    direccion: '',
    lat: '',
    lng: '',
    imagen_loc: '',
    duracion: '',
    creado_el_loc: new Date(),
    paquetefk: -1
    };

  edit: boolean = false;
  paquetes: Paquete[]=[]
  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute, public paquetesServices: PaquetesService) { }

  ngOnInit() {
  this.getPaquetes();
    
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
    delete this.game.creado_el_loc;
    delete this.game.id;
    this.gameService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      )
  }

  updateGame() {
    delete this.game.creado_el_loc;
    this.gameService.updateGame(this.game.id, this.game)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      )
  }
//Modal para el SwetAlert
  showModal(){
    
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Localidad guardada con éxito!',
      showConfirmButton: true,
      timer: 1500
    })
      
  }

  getPaquetes(){
    this.paquetesServices.getPaquetes().subscribe((paquetes: Paquete[])=>{
      this.paquetes=paquetes;
    })
  }


}
