import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the GameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameProvider {
  API_URI = 'http://localhost:3000/api';

  constructor(public http: HttpClient) {
    console.log('Hello GameProvider Provider');

  }
  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  getListByPaquetefk(id) {
    console.log("el fk es ", id);
    return this.http.get(`${this.API_URI}/games/getListByPaquetefk/${id}`);
  }

}
