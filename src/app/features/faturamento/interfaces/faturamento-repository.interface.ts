import { Faturamento } from '../domain/faturamento.model'; 
import { IBaseRepositorio } from '../../../core/services/base.repositorio';

export interface IFaturamentoRepository extends IBaseRepositorio<Faturamento> {}