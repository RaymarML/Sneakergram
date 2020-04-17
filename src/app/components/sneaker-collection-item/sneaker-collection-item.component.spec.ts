import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerCollectionItemComponent } from './sneaker-collection-item.component';

describe('SneakerCollectionItemComponent', () => {
  let component: SneakerCollectionItemComponent;
  let fixture: ComponentFixture<SneakerCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
