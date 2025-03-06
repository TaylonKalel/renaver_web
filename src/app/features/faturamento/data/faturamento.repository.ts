import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faturamento } from '../domain/faturamento.model'; 
import { IFaturamentoRepository } from '../interfaces/faturamento-repository.interface';
import { BaseRepositorio } from '../../../core/services/base.repositorio';

@Injectable({
  providedIn: 'root',
})
export class FaturamentoRepository extends BaseRepositorio<Faturamento> implements IFaturamentoRepository {
  constructor(http: HttpClient) {
    super(http, 'faturamento');
  }
}