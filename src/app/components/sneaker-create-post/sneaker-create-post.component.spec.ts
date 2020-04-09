import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerCreatePostComponent } from './sneaker-create-post.component';

describe('SneakerCreatePostComponent', () => {
  let component: SneakerCreatePostComponent;
  let fixture: ComponentFixture<SneakerCreatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerCreatePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
