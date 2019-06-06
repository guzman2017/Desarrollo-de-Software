
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especie } from '../models/Especie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEspecies() {
    return this.http.get(`${this.API_URI}/especies`);
  }

  getEspecie(id_es: string) {
    return this.http.get(`${this.API_URI}/especies/${id_es}`);
  }

  deleteEspecie(id_es: string) {
    return this.http.delete(`${this.API_URI}/especies/${id_es}`);
  }

  saveEspecie(especie: Especie) {
    return this.http.post(`${this.API_URI}/especies`, especie);
  }

  updateEspecie(id_es: string|number, updatedEspecie: Especie): Observable<Especie> {
    return this.http.put(`${this.API_URI}/especies/${id_es}`, updatedEspecie);
  }
 

}

