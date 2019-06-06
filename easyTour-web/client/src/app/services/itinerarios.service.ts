
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itinerario } from '../models/Itinerario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItinerariosService {

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

  saveItinerario(itinerario: Itinerario) {
    return this.http.post(`${this.API_URI}/itinerarios`, itinerario);
  }

  updateItinerario(id_it: string|number, updatedItinerario: Itinerario): Observable<Itinerario> {
    return this.http.put(`${this.API_URI}/itinerarios/${id_it}`, updatedItinerario);
  }

}