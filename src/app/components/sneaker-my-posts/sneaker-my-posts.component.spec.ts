import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerMyPostsComponent } from './sneaker-my-posts.component';

describe('SneakerMyPostsComponent', () => {
  let component: SneakerMyPostsComponent;
  let fixture: ComponentFixture<SneakerMyPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerMyPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerMyPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
