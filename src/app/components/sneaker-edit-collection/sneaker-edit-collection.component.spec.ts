import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerEditCollectionComponent } from './sneaker-edit-collection.component';

describe('SneakerEditCollectionComponent', () => {
  let component: SneakerEditCollectionComponent;
  let fixture: ComponentFixture<SneakerEditCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerEditCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerEditCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
