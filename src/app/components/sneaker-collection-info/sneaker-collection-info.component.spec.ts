import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerCollectionInfoComponent } from './sneaker-collection-info.component';

describe('SneakerCollectionInfoComponent', () => {
  let component: SneakerCollectionInfoComponent;
  let fixture: ComponentFixture<SneakerCollectionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerCollectionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerCollectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
