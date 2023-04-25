import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoprodutoFormularioComponent } from './tipoproduto-formulario.component';

describe('TipoprodutoFormularioComponent', () => {
  let component: TipoprodutoFormularioComponent;
  let fixture: ComponentFixture<TipoprodutoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoprodutoFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoprodutoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
