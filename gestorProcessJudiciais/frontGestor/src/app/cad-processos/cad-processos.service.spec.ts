import { TestBed } from '@angular/core/testing';

import { CadProcessosService } from './cad-processos.service';

describe('CadProcessosService', () => {
  let service: CadProcessosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadProcessosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
