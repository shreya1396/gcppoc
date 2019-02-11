import { TestBed } from '@angular/core/testing';

import { IdeaneedService } from './ideaneed.service';

describe('IdeaneedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeaneedService = TestBed.get(IdeaneedService);
    expect(service).toBeTruthy();
  });
});
