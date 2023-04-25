import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoestabelecimentoListaComponent } from './tipoestabelecimento-lista.component';

describe('TipoestabelecimentoListaComponent', () => {
  let component: TipoestabelecimentoListaComponent;
  let fixture: ComponentFixture<TipoestabelecimentoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoestabelecimentoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoestabelecimentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
