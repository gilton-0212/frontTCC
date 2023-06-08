import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadGerenciaComponent } from './head-gerencia.component';

describe('HeadGerenciaComponent', () => {
  let component: HeadGerenciaComponent;
  let fixture: ComponentFixture<HeadGerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadGerenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
