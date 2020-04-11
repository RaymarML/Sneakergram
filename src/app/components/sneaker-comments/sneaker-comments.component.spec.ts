import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerCommentsComponent } from './sneaker-comments.component';

describe('SneakerCommentsComponent', () => {
  let component: SneakerCommentsComponent;
  let fixture: ComponentFixture<SneakerCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
