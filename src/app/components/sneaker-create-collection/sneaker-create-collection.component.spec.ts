import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerCreateCollectionComponent } from './sneaker-create-collection.component';

describe('SneakerCreateCollectionComponent', () => {
  let component: SneakerCreateCollectionComponent;
  let fixture: ComponentFixture<SneakerCreateCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerCreateCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerCreateCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
