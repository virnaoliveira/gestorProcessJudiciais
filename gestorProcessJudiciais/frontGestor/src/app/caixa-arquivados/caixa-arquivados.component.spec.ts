import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaArquivadosComponent } from './caixa-arquivados.component';

describe('CaixaArquivadosComponent', () => {
  let component: CaixaArquivadosComponent;
  let fixture: ComponentFixture<CaixaArquivadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaArquivadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaArquivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
