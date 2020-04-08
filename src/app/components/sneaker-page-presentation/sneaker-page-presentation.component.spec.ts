import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerPagePresentationComponent } from './sneaker-page-presentation.component';

describe('SneakerPagePresentationComponent', () => {
  let component: SneakerPagePresentationComponent;
  let fixture: ComponentFixture<SneakerPagePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerPagePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerPagePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
