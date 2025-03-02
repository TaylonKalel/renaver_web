import { inject, Injectable } from '@angular/core';
import { IUsuarioService } from '../interfaces/usuario.service.interface';
import { Usuario } from '../domain/usuario.model';
import { Observable } from 'rxjs';
import { IUsuarioApi } from '../interfaces/usuario-api.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService {

  usuarioApi:IUsuarioApi = inject(UsuarioApi);

  // Obtém todos os "Usuarios"
  getAll(): Observable<Usuario[]> {
    return this.usuarioApi.getAllUsuarios();
  }

  // Obtém "Usuario"
  getById(id: number): Observable<Usuario> {
    return this.usuarioApi.getUsuarioById(id);
  }

  // Cria "Usuario"
  create(usuario: Partial<Usuario>): Observable<Usuario> {
    return this.usuarioApi.createUsuario(usuario);
  }

  // Atualiza "Usuario"
  update(id: number, usuario: Partial<Usuario>): Observable<Usuario> {
    return this.usuarioApi.updateUsuario(id, usuario);
  }

  // Remove "Usuario"
  delete(id: number): Observable<void> {
    return this.usuarioApi.deleteUsuario(id);
  }

}
