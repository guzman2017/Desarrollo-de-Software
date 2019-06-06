import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ActividadesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActividadesProvider {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getActividades() {
    return this.http.get(`${this.API_URI}/actividades`);
  }

  getActividad(id_act: string) {
    return this.http.get(`${this.API_URI}/actividades/${id_act}`);
  }

  deleteActividad(id_act: string) {
    return this.http.delete(`${this.API_URI}/actividades/${id_act}`);
  }

  saveActividad(actividad: any) {
    return this.http.post(`${this.API_URI}/actividades`, actividad);
  }

  getActividadesByItinerariofk(itinerariofk: string) {
    return this.http.get(`${this.API_URI}/actividades/getActividades/${itinerariofk}`);
  }
  // anadir provider para obtener informacion de las actividades

}
