import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerBoxComponent } from './sneaker-box.component';

describe('SneakerBoxComponent', () => {
  let component: SneakerBoxComponent;
  let fixture: ComponentFixture<SneakerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
