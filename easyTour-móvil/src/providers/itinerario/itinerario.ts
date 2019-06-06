import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ItinerarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItinerarioProvider {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getItinerarios() {
    return this.http.get(`${this.API_URI}/itinerarios`);
  }

  getItinerario(id_it: string) {
    return this.http.get(`${this.API_URI}/itinerarios/${id_it}`);
  }

  deleteItinerario(id_it: string) {
    return this.http.delete(`${this.API_URI}/itinerarios/${id_it}`);
  }

  saveItinerario(itinerario: any) {
    return this.http.post(`${this.API_URI}/itinerarios`, itinerario);
  }

  //anadir provider para obtener informacion del itinerario

}
