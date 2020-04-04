import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerLandingComponent } from './sneaker-landing.component';

describe('SneakerLandingComponent', () => {
  let component: SneakerLandingComponent;
  let fixture: ComponentFixture<SneakerLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
