import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { FaturamentoRepository } from '../data/faturamento.repository';
import { Faturamento } from '../domain/faturamento.model';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

describe('FaturamentoRepository', () => {
  let service: FaturamentoRepository;
  let httpMock: HttpTestingController;
  let apiUrl = environment.apiUrl;
  let endpoint = 'user';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(), 
        FaturamentoRepository],
    });

    service = TestBed.inject(FaturamentoRepository);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser criado corretamente', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar todos os Faturamentos', () => {
    const mockData: Faturamento[] = [
      { id: 1, name: 'Mock1' } as Faturamento,
      { id: 2, name: 'Mock2' } as Faturamento,
    ];

    service.getAll().subscribe((data:Faturamento[]) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(`${apiUrl}/${endpoint}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('deve buscar um Faturamento por ID', () => {
    const mockFaturamento: Faturamento = { id: 1, name: 'Mock1' } as Faturamento;

    service.getById(1).subscribe((data:Faturamento) => {
      expect(data).toEqual(mockFaturamento);
    });

    const req = httpMock.expectOne(`${apiUrl}/${endpoint}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockFaturamento);
  });

  it('deve criar um novo Faturamento', () => {
    const payload = { name: 'Novo' };
    const created = { id: 3, name: 'Novo' } as Faturamento;

    service.create(payload).subscribe((data:Faturamento) => {
      expect(data).toEqual(created);
    });

    const req = httpMock.expectOne(`${apiUrl}/${endpoint}`);
    expect(req.request.method).toBe('POST');
    req.flush(created);
  });

  it('deve atualizar um Faturamento', () => {
    const payload = { name: 'Atualizado' };
    const updated = { id: 1, name: 'Atualizado' } as Faturamento;

    service.update(1, payload).subscribe((data:Faturamento) => {
      expect(data).toEqual(updated);
    });

    const req = httpMock.expectOne(`${apiUrl}/${endpoint}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updated);
  });

  it('deve deletar um Faturamento', () => {
    service.delete(1).subscribe((response) => {
      expect(response).toBeDefined();
      expect(response).toBeNull();
    });
    
    const req = httpMock.expectOne(`${apiUrl}/${endpoint}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
