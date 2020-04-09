import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerPopularItemComponent } from './sneaker-popular-item.component';

describe('SneakerPopularItemComponent', () => {
  let component: SneakerPopularItemComponent;
  let fixture: ComponentFixture<SneakerPopularItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerPopularItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerPopularItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
