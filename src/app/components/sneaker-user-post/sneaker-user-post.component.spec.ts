import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerUserPostComponent } from './sneaker-user-post.component';

describe('SneakerUserPostComponent', () => {
  let component: SneakerUserPostComponent;
  let fixture: ComponentFixture<SneakerUserPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerUserPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerUserPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
