import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaColetasComponent } from './venda-coletas.component';

describe('VendaColetasComponent', () => {
  let component: VendaColetasComponent;
  let fixture: ComponentFixture<VendaColetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaColetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaColetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
