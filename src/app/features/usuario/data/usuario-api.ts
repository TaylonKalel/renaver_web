import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApi } from '../../../core/base_api';
import { Usuario } from '../domain/usuario.model'; 
import { IUsuarioApi } from '../interfaces/usuario-api.interface';
// Ajuste o import acima se quiser armazenar o model em outro lugar

@Injectable({
  providedIn: 'root',
})
export class UsuarioApi implements IUsuarioApi, BaseApi {
  private baseUrl = 'https://minha-api.com/api/usuarios'; // Exemplo

  constructor(private http: HttpClient) {}

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  createUsuario(payload: Partial<Usuario>): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, payload);
  }

  updateUsuario(id: number, payload: Partial<Usuario>): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/${id}`, payload);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
