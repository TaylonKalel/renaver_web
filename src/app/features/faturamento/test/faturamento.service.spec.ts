import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Faturamento } from '../domain/faturamento.model';
import { FaturamentoService } from '../data/faturamento.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { IFaturamentoRepository } from '../interfaces/faturamento-repository.interface';

describe('FaturamentoService', () => {
  let service: FaturamentoService;
  let repositoryMock: jasmine.SpyObj<IFaturamentoRepository>;

  beforeEach(() => {
    repositoryMock = jasmine.createSpyObj('IFaturamentoRepository', [
      'getAll',
      'getById',
      'create',
      'update',
      'delete'
    ]);

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        FaturamentoService,
        { provide: 'IFaturamentoRepository', useValue: repositoryMock }
      ]
    });

    service = TestBed.inject(FaturamentoService);    
  });

  it('deve ser criado corretamente', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar getAll() e retornar uma lista', (done) => {
    const mockData: Faturamento[] = [
      { id: 1, name: 'Mock 1' } as Faturamento,
      { id: 2, name: 'Mock 2' } as Faturamento
    ];
    repositoryMock.getAll.and.returnValue(of(mockData));

    service.getAll().subscribe((data:Faturamento[]) => {
      expect(data).toEqual(mockData);
      expect(repositoryMock.getAll).toHaveBeenCalled();
      done();
    });
  });

  it('deve chamar getById() e retornar um único item', (done) => {
    const mockData: Faturamento = { id: 1, name: 'Mock 1' } as Faturamento;
    repositoryMock.getById.and.returnValue(of(mockData));

    service.getById(1).subscribe((data:Faturamento) => {
      expect(data).toEqual(mockData);
      expect(repositoryMock.getById).toHaveBeenCalledWith(1);
      done();
    });
  });

  it('deve chamar createFaturamento() e retornar o item criado', (done) => {
    const mockData: Faturamento = { id: 3, name: 'Novo Mock' } as Faturamento;
    repositoryMock.create.and.returnValue(of(mockData));

    service.create({ name: 'Novo Mock' }).subscribe((data:Faturamento) => {
      expect(data).toEqual(mockData);
      expect(repositoryMock.create).toHaveBeenCalledWith({ name: 'Novo Mock' });
      done();
    });
  });

  it('deve chamar update() e retornar o item atualizado', (done) => {
    const updatedData: Faturamento = { id: 1, name: 'Atualizado' } as Faturamento;
    repositoryMock.update.and.returnValue(of(updatedData));

    service.update(1, { name: 'Atualizado' }).subscribe((data:Faturamento) => {
      expect(data).toEqual(updatedData);
      expect(repositoryMock.update).toHaveBeenCalledWith(1, { name: 'Atualizado' });
      done();
    });
  });

  it('deve chamar delete() e não retornar nada', (done) => {
    repositoryMock.delete.and.returnValue(of(undefined));

    service.delete(1).subscribe((data:Faturamento) => {
      expect(data).toBeUndefined();
      expect(repositoryMock.delete).toHaveBeenCalledWith(1);
      done();
    });
  });
});
