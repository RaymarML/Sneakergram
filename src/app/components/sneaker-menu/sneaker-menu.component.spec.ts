import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerMenuComponent } from './sneaker-menu.component';

describe('SneakerMenuComponent', () => {
  let component: SneakerMenuComponent;
  let fixture: ComponentFixture<SneakerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
