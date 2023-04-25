import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoestabelecimentoComponent } from './tipoestabelecimento.component';

describe('TipoestabelecimentoComponent', () => {
  let component: TipoestabelecimentoComponent;
  let fixture: ComponentFixture<TipoestabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoestabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoestabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
