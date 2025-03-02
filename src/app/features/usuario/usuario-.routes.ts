import { Routes } from '@angular/router';
import { UsuarioListComponent } from './presentation/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './presentation/usuario-form/usuario-form.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'list', component: UsuarioListComponent },
  { path: 'form', component: UsuarioFormComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

