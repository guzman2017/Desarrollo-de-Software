import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/Actividad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

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

  saveActividad(actividad: Actividad) {
    return this.http.post(`${this.API_URI}/actividades`, actividad);
  }

  updateActividad(id_act: string|number, updatedActividad: Actividad): Observable<Actividad> {
    return this.http.put(`${this.API_URI}/actividades/${id_act}`, updatedActividad);
  }

 }
