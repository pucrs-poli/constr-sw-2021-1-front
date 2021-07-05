import { TestBed } from '@angular/core/testing';

import { DisciplinEditionService } from './disciplin-edition.service';

describe('EvaluationsService', () => {
  let service: DisciplinEditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplinEditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
