import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerLastCollectionsComponent } from './sneaker-last-collections.component';

describe('SneakerLastCollectionsComponent', () => {
  let component: SneakerLastCollectionsComponent;
  let fixture: ComponentFixture<SneakerLastCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerLastCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerLastCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
