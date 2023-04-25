import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoestabelecimentoFormularioComponent } from './tipoestabelecimento-formulario.component';

describe('TipoestabelecimentoFormularioComponent', () => {
  let component: TipoestabelecimentoFormularioComponent;
  let fixture: ComponentFixture<TipoestabelecimentoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoestabelecimentoFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoestabelecimentoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
