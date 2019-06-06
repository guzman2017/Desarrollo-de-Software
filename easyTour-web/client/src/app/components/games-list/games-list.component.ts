import { Component, OnInit, HostBinding, ChangeDetectorRef, Inject } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from 'src/app/models/Game';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent implements OnInit {
  
  /* info del mapa */
  
  zoom: number = 7;
  lat: number = -1.251136;
  lng: number =-78.623336;
 

  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor( private gameService: GamesService) { }
  openedWindow : number = 0; 
  
  id = []; 

  openWindow(id) {
      this.openedWindow = id; 
  }
  
  isInfoWindowOpen(id) {
      return this.openedWindow == id; 
  }
 
  filterPost = '';
  pageActual: number= 1;
  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames()
      .subscribe(
        res => {
          this.games = res;
        },
        err => console.error(err)
      );
  }

  deleteGame(id: string) {
    this.gameService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
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
