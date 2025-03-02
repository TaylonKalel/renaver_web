import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';
import { UsuarioApi } from '../api/usuario.api';
import { IUsuarioService } from '../interfaces/usuario.service.interface';
import { of } from 'rxjs';
import { Usuario } from '../domain/usuario.model';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let apiMock: jasmine.SpyObj<UsuarioApi>;

  beforeEach(() => {
    const apiSpy = jasmine.createSpyObj('UsuarioApi', [
      'getAllUsuarios',
      'getUsuarioById',
      'createUsuario',
      'updateUsuario',
      'deleteUsuario'
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsuarioService,
        { provide: UsuarioApi, useValue: apiSpy }
      ]
    });

    service = TestBed.inject(UsuarioService);
    apiMock = TestBed.inject(UsuarioApi) as jasmine.SpyObj<UsuarioApi>;
  });

  it('deve ser criado corretamente', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar getAllUsuarios() e retornar uma lista', (done) => {
    const mockData: Usuario[] = [
      { id: 1, name: 'Mock 1' } as Usuario,
      { id: 2, name: 'Mock 2' } as Usuario
    ];
    apiMock.getAllUsuarios.and.returnValue(of(mockData));

    service.getAll().subscribe((data) => {
      expect(data).toEqual(mockData);
      expect(apiMock.getAllUsuarios).toHaveBeenCalled();
      done();
    });
  });

  it('deve chamar getUsuarioById() e retornar um único item', (done) => {
    const mockData: Usuario = { id: 1, name: 'Mock 1' } as Usuario;
    apiMock.getUsuarioById.and.returnValue(of(mockData));

    service.getById(1).subscribe((data) => {
      expect(data).toEqual(mockData);
      expect(apiMock.getUsuarioById).toHaveBeenCalledWith(1);
      done();
    });
  });

  it('deve chamar createUsuario() e retornar o item criado', (done) => {
    const mockData: Usuario = { id: 3, name: 'Novo Mock' } as Usuario;
    apiMock.createUsuario.and.returnValue(of(mockData));

    service.create({ name: 'Novo Mock' }).subscribe((data) => {
      expect(data).toEqual(mockData);
      expect(apiMock.createUsuario).toHaveBeenCalledWith({ name: 'Novo Mock' });
      done();
    });
  });

  it('deve chamar updateUsuario() e retornar o item atualizado', (done) => {
    const updatedData: Usuario = { id: 1, name: 'Atualizado' } as Usuario;
    apiMock.updateUsuario.and.returnValue(of(updatedData));

    service.update(1, { name: 'Atualizado' }).subscribe((data) => {
      expect(data).toEqual(updatedData);
      expect(apiMock.updateUsuario).toHaveBeenCalledWith(1, { name: 'Atualizado' });
      done();
    });
  });

  it('deve chamar deleteUsuario() e não retornar nada', (done) => {
    apiMock.deleteUsuario.and.returnValue(of(undefined));

    service.delete(1).subscribe((data) => {
      expect(data).toBeUndefined();
      expect(apiMock.deleteUsuario).toHaveBeenCalledWith(1);
      done();
    });
  });
});
