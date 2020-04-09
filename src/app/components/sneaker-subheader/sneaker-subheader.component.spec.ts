import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerSubheaderComponent } from './sneaker-subheader.component';

describe('SneakerSubheaderComponent', () => {
  let component: SneakerSubheaderComponent;
  let fixture: ComponentFixture<SneakerSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneakerSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
