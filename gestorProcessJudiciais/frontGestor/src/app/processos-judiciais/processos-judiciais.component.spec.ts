import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosJudiciaisComponent } from './processos-judiciais.component';

describe('ProcessosJudiciaisComponent', () => {
  let component: ProcessosJudiciaisComponent;
  let fixture: ComponentFixture<ProcessosJudiciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessosJudiciaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessosJudiciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
