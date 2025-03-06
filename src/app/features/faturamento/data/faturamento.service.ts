import { Inject, Injectable } from '@angular/core';

import { IFaturamentoRepository } from '../interfaces/faturamento-repository.interface';
import { Faturamento } from '../domain/faturamento.model';
import { IFaturamentoService } from '../interfaces/faturamento.service.interface';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService implements IFaturamentoService {
  constructor(@Inject('IFaturamentoRepository') private faturamentoRepository: IFaturamentoRepository) {
  }

  getAll(): any {
    return this.faturamentoRepository.getAll();
  }

  getById(id: number): any {
    return this.faturamentoRepository.getById(id);
  }

  create(item: Partial<Faturamento>): any {
    return this.faturamentoRepository.create(item);
  }

  update(id: number, item: Partial<Faturamento>): any {
    return this.faturamentoRepository.update(id, item);
  }

  delete(id: number): any {
    return this.faturamentoRepository.delete(id);
  }

}