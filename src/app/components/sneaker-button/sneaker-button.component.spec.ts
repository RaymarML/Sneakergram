import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerButtonComponent } from './sneaker-button.component';

describe('SneakerButtonComponent', () => {
  let component: SneakerButtonComponent;
  let fixture: ComponentFixture<SneakerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
