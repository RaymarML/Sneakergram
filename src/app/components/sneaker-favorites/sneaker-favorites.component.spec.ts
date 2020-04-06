import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerFavoritesComponent } from './sneaker-favorites.component';

describe('SneakerFavoritesComponent', () => {
  let component: SneakerFavoritesComponent;
  let fixture: ComponentFixture<SneakerFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
