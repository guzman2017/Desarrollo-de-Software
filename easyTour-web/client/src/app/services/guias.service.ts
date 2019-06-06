import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guia } from '../models/Guia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuiasService {

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

  saveGuia(guia: Guia) {
    return this.http.post(`${this.API_URI}/guias`, guia);
  }

  updateGuia(id_guia: string|number, updatedGuia: Guia): Observable<Guia> {
    return this.http.put(`${this.API_URI}/guias/${id_guia}`, updatedGuia);
  }

}
