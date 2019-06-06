import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GuiaProvider {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGuias() {
    return this.http.get(`${this.API_URI}/guias`);
  }

  getGuia(id_guia: string) {
    return this.http.get(`${this.API_URI}/guias/${id_guia}`);
  }

  deleteGuia(id_guia: string) {
    return this.http.delete(`${this.API_URI}/guias/${id_guia}`);
  }

  saveGuia(guia: any) {
    return this.http.post(`${this.API_URI}/guias`, guia);
  }

  getGuiasBypaquetefk(id_guia: string) {
    return this.http.get(`${this.API_URI}/guias/getByGuiapaquetefk/${id_guia}`);
  }

  //anadir provider para obtener informacion del guia

}
