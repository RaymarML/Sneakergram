import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerPopularComponent } from './sneaker-popular.component';

describe('SneakerPopularComponent', () => {
  let component: SneakerPopularComponent;
  let fixture: ComponentFixture<SneakerPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
