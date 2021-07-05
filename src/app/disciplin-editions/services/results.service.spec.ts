import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';

describe('ResultsService', () => {
  let results: ResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    results = TestBed.inject(ResultsService);
  });

  it('should be created', () => {
    expect(results).toBeTruthy();
  });
});
