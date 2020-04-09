import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerAddButtonComponent } from './sneaker-add-button.component';

describe('SneakerAddButtonComponent', () => {
  let component: SneakerAddButtonComponent;
  let fixture: ComponentFixture<SneakerAddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerAddButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
