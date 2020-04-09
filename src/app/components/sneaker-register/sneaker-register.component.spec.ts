import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerRegisterComponent } from './sneaker-register.component';

describe('SneakerRegisterComponent', () => {
  let component: SneakerRegisterComponent;
  let fixture: ComponentFixture<SneakerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
