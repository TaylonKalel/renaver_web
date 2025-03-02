import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioApi } from './usuario.api';
// Mesmo nome do arquivo gerado acima
import { Usuario } from '../../domain/entities/usuario.model';

describe('UsuarioApi', () => {
  let service: UsuarioApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioApi],
    });

    service = TestBed.inject(UsuarioApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser criado corretamente', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar todos os Usuarios', () => {
    const mockData: Usuario[] = [
      { id: 1, name: 'Mock1' } as Usuario,
      { id: 2, name: 'Mock2' } as Usuario,
    ];

    service.getAllUsuarios().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('https://minha-api.com/api/usuarios');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('deve buscar um Usuario por ID', () => {
    const mockUsuario: Usuario = { id: 1, name: 'Mock1' } as Usuario;

    service.getUsuarioById(1).subscribe((data) => {
      expect(data).toEqual(mockUsuario);
    });

    const req = httpMock.expectOne('https://minha-api.com/api/usuarios/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsuario);
  });

  it('deve criar um novo Usuario', () => {
    const payload = { name: 'Novo' };
    const created = { id: 3, name: 'Novo' } as Usuario;

    service.createUsuario(payload).subscribe((data) => {
      expect(data).toEqual(created);
    });

    const req = httpMock.expectOne('https://minha-api.com/api/usuarios');
    expect(req.request.method).toBe('POST');
    req.flush(created);
  });

  it('deve atualizar um Usuario', () => {
    const payload = { name: 'Atualizado' };
    const updated = { id: 1, name: 'Atualizado' } as Usuario;

    service.updateUsuario(1, payload).subscribe((data) => {
      expect(data).toEqual(updated);
    });

    const req = httpMock.expectOne('https://minha-api.com/api/usuarios/1');
    expect(req.request.method).toBe('PUT');
    req.flush(updated);
  });

  it('deve deletar um Usuario', () => {
    service.deleteUsuario(1).subscribe((response) => {
      expect(response).toBeUndefined();
    });

    const req = httpMock.expectOne('https://minha-api.com/api/usuarios/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
