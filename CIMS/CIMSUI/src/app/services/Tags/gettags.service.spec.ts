import { TestBed } from '@angular/core/testing';

import { GettagsService } from './gettags.service';

describe('GettagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GettagsService = TestBed.get(GettagsService);
    expect(service).toBeTruthy();
  });
});
