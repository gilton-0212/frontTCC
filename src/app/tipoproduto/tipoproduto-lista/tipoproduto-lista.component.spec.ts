import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoprodutoListaComponent } from './tipoproduto-lista.component';

describe('TipoprodutoListaComponent', () => {
  let component: TipoprodutoListaComponent;
  let fixture: ComponentFixture<TipoprodutoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoprodutoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoprodutoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
