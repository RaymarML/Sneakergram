import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerEditPostComponent } from './sneaker-edit-post.component';

describe('SneakerEditPostComponent', () => {
  let component: SneakerEditPostComponent;
  let fixture: ComponentFixture<SneakerEditPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerEditPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
