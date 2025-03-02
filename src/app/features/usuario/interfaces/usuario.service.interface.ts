import { Usuario } from '../domain/usuario.model';
import { Observable } from 'rxjs';

export interface IUsuarioService {

  getAll(): Observable<Usuario[]>;

  getById(id: number): Observable<Usuario>;

  create(usuario: Partial<Usuario>): Observable<Usuario>;

  update(id: number, usuario: Partial<Usuario>): Observable<Usuario>;
  
  delete(id: number): Observable<void>;
}
