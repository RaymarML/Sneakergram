import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerMyCollectionsComponent } from './sneaker-my-collections.component';

describe('SneakerMyCollectionsComponent', () => {
  let component: SneakerMyCollectionsComponent;
  let fixture: ComponentFixture<SneakerMyCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerMyCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerMyCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
