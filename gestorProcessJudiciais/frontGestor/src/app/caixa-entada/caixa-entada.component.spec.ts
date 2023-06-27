import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaEntadaComponent } from './caixa-entada.component';

describe('CaixaEntadaComponent', () => {
  let component: CaixaEntadaComponent;
  let fixture: ComponentFixture<CaixaEntadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaEntadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaEntadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
