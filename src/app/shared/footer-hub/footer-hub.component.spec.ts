import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHubComponent } from './footer-hub.component';

describe('FooterHubComponent', () => {
  let component: FooterHubComponent;
  let fixture: ComponentFixture<FooterHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
