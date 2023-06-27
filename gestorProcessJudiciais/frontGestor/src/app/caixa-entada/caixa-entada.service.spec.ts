import { TestBed } from '@angular/core/testing';

import { CaixaEntadaService } from './caixa-entada.service';

describe('CaixaEntadaService', () => {
  let service: CaixaEntadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaixaEntadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
