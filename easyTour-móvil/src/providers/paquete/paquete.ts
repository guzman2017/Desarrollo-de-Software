import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the PaqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaqueteProvider {


  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPaquetes() {
    return this.http.get(`${this.API_URI}/paquetes`);
  }

  getPaquete(id_paq: string) {
    return this.http.get(`${this.API_URI}/paquetes/${id_paq}`);
  }

  deletePaquete(id_paq: string) {
    return this.http.delete(`${this.API_URI}/paquetes/${id_paq}`);
  }

  savePaquete(paquete: any) {
    return this.http.post(`${this.API_URI}/paquetes`, paquete);
  }

  getNames(name_paq: string) {
    return this.http.get(`${this.API_URI}/paquetes/getName/${name_paq}`);
  }
  

}
