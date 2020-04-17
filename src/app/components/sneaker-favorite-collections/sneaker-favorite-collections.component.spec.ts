import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerFavoriteCollectionsComponent } from './sneaker-favorite-collections.component';

describe('SneakerFavoriteCollectionsComponent', () => {
  let component: SneakerFavoriteCollectionsComponent;
  let fixture: ComponentFixture<SneakerFavoriteCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerFavoriteCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerFavoriteCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
