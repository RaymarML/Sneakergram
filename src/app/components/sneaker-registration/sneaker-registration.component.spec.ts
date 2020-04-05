import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerRegistrationComponent } from './sneaker-registration.component';

describe('SneakerRegistrationComponent', () => {
  let component: SneakerRegistrationComponent;
  let fixture: ComponentFixture<SneakerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
