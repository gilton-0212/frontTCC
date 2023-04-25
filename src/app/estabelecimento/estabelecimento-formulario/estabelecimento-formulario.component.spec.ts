import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoFormularioComponent } from './estabelecimento-formulario.component';

describe('EstabelecimentoFormularioComponent', () => {
  let component: EstabelecimentoFormularioComponent;
  let fixture: ComponentFixture<EstabelecimentoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentoFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
