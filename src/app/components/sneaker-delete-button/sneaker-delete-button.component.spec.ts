import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerDeleteButtonComponent } from './sneaker-delete-button.component';

describe('SneakerDeleteButtonComponent', () => {
  let component: SneakerDeleteButtonComponent;
  let fixture: ComponentFixture<SneakerDeleteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerDeleteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
