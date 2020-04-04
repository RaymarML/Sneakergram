import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerLoginComponent } from './sneaker-login.component';

describe('SneakerLoginComponent', () => {
  let component: SneakerLoginComponent;
  let fixture: ComponentFixture<SneakerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
