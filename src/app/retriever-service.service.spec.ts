import { TestBed } from '@angular/core/testing';

import { RetrieverService } from './retriever.service';

describe('RetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrieverService = TestBed.get(RetrieverService);
    expect(service).toBeTruthy();
  });
});
