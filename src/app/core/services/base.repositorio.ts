import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



export interface IBaseRepositorio<T> {
  getAll(): Observable<T[]>;
  getById(id: number): Observable<T>;
  create(item: Partial<T>): Observable<T>;
  update(id: number, item: Partial<T>): Observable<T>;
  delete(id: number): Observable<void>;
}

@Injectable({
  providedIn: 'root'
})
export abstract class BaseRepositorio<T> implements IBaseRepositorio<T> {
  apiUrl = environment.apiUrl;
  constructor(protected http: HttpClient, private endpoint: string) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.endpoint}`);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.endpoint}/${id}`);
  }

  create(item: Partial<T>): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.endpoint}`, item);
  }

  update(id: number, item: Partial<T>): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${this.endpoint}/${id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${this.endpoint}/${id}`);
  }
}
