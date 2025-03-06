import { Faturamento } from '../domain/faturamento.model';
import { Observable } from 'rxjs';

export interface IFaturamentoService {

  getAll(): Observable<Faturamento[]>;

  getById(id: number): Observable<Faturamento>;

  create(faturamento: Partial<Faturamento>): Observable<Faturamento>;

  update(id: number, faturamento: Partial<Faturamento>): Observable<Faturamento>;
  
  delete(id: number): Observable<void>;
}
