import { TestBed } from '@angular/core/testing';

import { GetAllIdeasService } from './get-all-ideas.service';

describe('GetAllIdeasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllIdeasService = TestBed.get(GetAllIdeasService);
    expect(service).toBeTruthy();
  });
});
