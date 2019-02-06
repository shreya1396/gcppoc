import { TestBed } from '@angular/core/testing';

import { BoxownerService } from './boxowner.service';

describe('BoxownerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxownerService = TestBed.get(BoxownerService);
    expect(service).toBeTruthy();
  });
});
