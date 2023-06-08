import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadHubComponent } from './head-hub.component';

describe('HeadHubComponent', () => {
  let component: HeadHubComponent;
  let fixture: ComponentFixture<HeadHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
