import { TestBed } from '@angular/core/testing';

import { ProcessosJudiciaisService } from './processos-judiciais.service';

describe('ProcessosJudiciaisService', () => {
  let service: ProcessosJudiciaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessosJudiciaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
