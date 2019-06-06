import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

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

  saveProveedor(proveedor: Proveedor) {
    return this.http.post(`${this.API_URI}/proveedores`, proveedor);
  }

  updateProveedor(id_pro: string|number, updatedProveedor: Proveedor): Observable<Proveedor> {
    return this.http.put(`${this.API_URI}/proveedores/${id_pro}`,updatedProveedor );
  }

}
