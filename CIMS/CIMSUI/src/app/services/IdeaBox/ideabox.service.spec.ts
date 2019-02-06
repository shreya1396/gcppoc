import { TestBed } from '@angular/core/testing';

import { IdeaboxService } from './ideabox.service';

describe('IdeaboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeaboxService = TestBed.get(IdeaboxService);
    expect(service).toBeTruthy();
  });
});
