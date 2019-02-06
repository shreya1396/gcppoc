import { TestBed, async, inject } from '@angular/core/testing';

import { LogInOutGuard } from './log-in-out.guard';

describe('LogInOutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInOutGuard]
    });
  });

  it('should ...', inject([LogInOutGuard], (guard: LogInOutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
