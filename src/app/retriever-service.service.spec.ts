import { TestBed } from '@angular/core/testing';

import { RetrieverServiceService } from './retriever-service.service';

describe('RetrieverServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrieverServiceService = TestBed.get(RetrieverServiceService);
    expect(service).toBeTruthy();
  });
});
