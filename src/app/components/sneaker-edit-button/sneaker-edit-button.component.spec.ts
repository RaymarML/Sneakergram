import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerEditButtonComponent } from './sneaker-edit-button.component';

describe('SneakerEditButtonComponent', () => {
  let component: SneakerEditButtonComponent;
  let fixture: ComponentFixture<SneakerEditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerEditButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
