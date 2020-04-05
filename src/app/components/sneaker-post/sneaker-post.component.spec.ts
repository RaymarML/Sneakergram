import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerPostComponent } from './sneaker-post.component';

describe('SneakerPostComponent', () => {
  let component: SneakerPostComponent;
  let fixture: ComponentFixture<SneakerPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
