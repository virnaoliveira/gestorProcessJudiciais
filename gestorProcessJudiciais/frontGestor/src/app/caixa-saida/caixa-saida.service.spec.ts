import { TestBed } from '@angular/core/testing';

import { CaixaSaidaService } from './caixa-saida.service';

describe('CaixaSaidaService', () => {
  let service: CaixaSaidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaixaSaidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
