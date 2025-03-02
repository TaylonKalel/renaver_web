import { Observable } from 'rxjs';
import { Usuario } from '../domain/usuario.model'; 

export interface IUsuarioApi {
  
  getAllUsuarios(): Observable<Usuario[]>;

  getUsuarioById(id: number): Observable<Usuario>;

  createUsuario(payload: Partial<Usuario>): Observable<Usuario>;

  updateUsuario(id: number, payload: Partial<Usuario>): Observable<Usuario>;

  deleteUsuario(id: number): Observable<void>;
}
