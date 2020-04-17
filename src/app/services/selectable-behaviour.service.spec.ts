import { TestBed } from '@angular/core/testing';

import { SelectableBehaviourService } from './selectable-behaviour.service';

describe('SelectableBehaviourService', () => {
  let service: SelectableBehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectableBehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
