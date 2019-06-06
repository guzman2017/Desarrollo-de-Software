import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorProvider {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProveedores() {
    return this.http.get(`${this.API_URI}/proveedores`);
  }

  getProveedor(id_pro: string) {
    return this.http.get(`${this.API_URI}/proveedores/${id_pro}`);
  }

  deleteProveedor(id_pro: string) {
    return this.http.delete(`${this.API_URI}/proveedores/${id_pro}`);
  }

  saveProveedor(proveedor: any) {
    return this.http.post(`${this.API_URI}/proveedores`, proveedor);
  }

  getByPaquetefk(paquetefk: string) {
    return this.http.get(`${this.API_URI}/proveedores/getByPaquetefk/${paquetefk}`);
  }


}
