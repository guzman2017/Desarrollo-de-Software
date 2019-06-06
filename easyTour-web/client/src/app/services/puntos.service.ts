import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Punto } from '../models/Punto';

@Injectable({
  providedIn: 'root'
})
export class PuntosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPuntos() {
    return this.http.get(`${this.API_URI}/puntos`);
  }

  getPunto(id_pun: string) {
    return this.http.get(`${this.API_URI}/puntos/${id_pun}`);
  }

  deletePunto(id_pun: string) {
    return this.http.delete(`${this.API_URI}/puntos/${id_pun}`);
  }

  savePunto(punto: Punto) {
    return this.http.post(`${this.API_URI}/puntos`, punto);
  }

  updatePunto(id_pun: string|number, updatedPunto: Punto): Observable<Punto> {
    return this.http.put(`${this.API_URI}/puntos/${id_pun}`, updatedPunto);
  }

}
