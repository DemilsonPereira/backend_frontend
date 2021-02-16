import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioAtendimentoComponent } from './relatorio-atendimento.component';

describe('RelatorioAtendimentoComponent', () => {
  let component: RelatorioAtendimentoComponent;
  let fixture: ComponentFixture<RelatorioAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
