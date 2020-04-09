import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerContentPageComponent } from './sneaker-content-page.component';

describe('SneakerPostComponent', () => {
  let component: SneakerContentPageComponent;
  let fixture: ComponentFixture<SneakerContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
