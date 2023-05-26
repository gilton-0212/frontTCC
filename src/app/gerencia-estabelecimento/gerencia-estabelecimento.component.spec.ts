import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaEstabelecimentoComponent } from './gerencia-estabelecimento.component';

describe('GerenciaEstabelecimentoComponent', () => {
  let component: GerenciaEstabelecimentoComponent;
  let fixture: ComponentFixture<GerenciaEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciaEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
