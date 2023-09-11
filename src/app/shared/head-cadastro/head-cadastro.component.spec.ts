import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCadastroComponent } from './head-cadastro.component';

describe('HeadCadastroComponent', () => {
  let component: HeadCadastroComponent;
  let fixture: ComponentFixture<HeadCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
