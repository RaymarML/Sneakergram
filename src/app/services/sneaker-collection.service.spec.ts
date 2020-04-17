import { TestBed } from '@angular/core/testing';

import { SneakerCollectionService } from './sneaker-collection.service';

describe('SneakerCollectionService', () => {
  let service: SneakerCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SneakerCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
