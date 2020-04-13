import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerCollectionComponent } from './sneaker-collection.component';

describe('SneakerCollectionComponent', () => {
  let component: SneakerCollectionComponent;
  let fixture: ComponentFixture<SneakerCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
