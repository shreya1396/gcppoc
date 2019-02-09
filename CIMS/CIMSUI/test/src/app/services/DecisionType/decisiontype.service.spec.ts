import { TestBed } from '@angular/core/testing';

import { DecisiontypeService } from './decisiontype.service';

describe('DecisiontypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecisiontypeService = TestBed.get(DecisiontypeService);
    expect(service).toBeTruthy();
  });
});
