import { TestBed } from '@angular/core/testing';

import { CaixaArquivadosService } from './caixa-arquivados.service';

describe('CaixaArquivadosService', () => {
  let service: CaixaArquivadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaixaArquivadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
