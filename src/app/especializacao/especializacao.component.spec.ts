import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacaoComponent } from './especializacao.component';

describe('EspecializacaoComponent', () => {
  let component: EspecializacaoComponent;
  let fixture: ComponentFixture<EspecializacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecializacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
