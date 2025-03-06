import { Routes } from '@angular/router';
import { FaturamentoListComponent } from './presentation/pages/faturamento-list/faturamento-list.component';
import { FaturamentoFormComponent } from './presentation/pages/faturamento-form/faturamento-form.component';

export const FATURAMENTO_ROUTES: Routes = [
  { path: 'list', component: FaturamentoListComponent },
  { path: 'form', component: FaturamentoFormComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

