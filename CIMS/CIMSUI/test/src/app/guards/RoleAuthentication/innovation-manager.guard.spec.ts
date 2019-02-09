import { TestBed, async, inject } from '@angular/core/testing';

import { InnovationManagerGuard } from './innovation-manager.guard';

describe('InnovationManagerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InnovationManagerGuard]
    });
  });

  it('should ...', inject([InnovationManagerGuard], (guard: InnovationManagerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
