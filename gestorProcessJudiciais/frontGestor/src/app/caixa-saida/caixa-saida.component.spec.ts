import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaSaidaComponent } from './caixa-saida.component';

describe('CaixaSaidaComponent', () => {
  let component: CaixaSaidaComponent;
  let fixture: ComponentFixture<CaixaSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaSaidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
