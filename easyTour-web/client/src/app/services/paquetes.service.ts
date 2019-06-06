import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paquete } from '../models/Paquete';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {

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

  savePaquete(paquete: Paquete) {
    return this.http.post(`${this.API_URI}/paquetes`, paquete);
  }

  updatePaquete(id_paq: string|number, updatedPaquete: Paquete): Observable<Paquete> {
    return this.http.put(`${this.API_URI}/paquetes/${id_paq}`, updatedPaquete);
  }

}
