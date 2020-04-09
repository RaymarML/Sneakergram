import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerMainComponent } from './sneaker-main.component';

describe('SneakerMainComponent', () => {
  let component: SneakerMainComponent;
  let fixture: ComponentFixture<SneakerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
