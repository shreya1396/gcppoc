import { TestBed } from '@angular/core/testing';

import { AddIdeaService } from './add-idea.service';

describe('AddIdeaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddIdeaService = TestBed.get(AddIdeaService);
    expect(service).toBeTruthy();
  });
});
