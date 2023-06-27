import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProcessosComponent } from './cad-processos.component';

describe('CadProcessosComponent', () => {
  let component: CadProcessosComponent;
  let fixture: ComponentFixture<CadProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadProcessosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
