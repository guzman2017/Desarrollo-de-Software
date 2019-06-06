import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
//import {Punto} from '../models/Punto';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.API_URI}/categorias`);
  }

  getCategoria(id_cat: string) {
    return this.http.get(`${this.API_URI}/categorias/${id_cat}`);
  }

  deleteCategoria(id_cat: string) {
    return this.http.delete(`${this.API_URI}/categorias/${id_cat}`);
  }

  saveCategoria(categoria: Categoria) {
    return this.http.post(`${this.API_URI}/categorias`, categoria);
  }

  updateCategoria(id_cat: string|number, updatedCategoria: Categoria): Observable<Categoria> {
    return this.http.put(`${this.API_URI}/categorias/${id_cat}`, updatedCategoria);
  }

}
