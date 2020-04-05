import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerSideMenuComponent } from './sneaker-side-menu.component';

describe('SneakerSideMenuComponent', () => {
  let component: SneakerSideMenuComponent;
  let fixture: ComponentFixture<SneakerSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
