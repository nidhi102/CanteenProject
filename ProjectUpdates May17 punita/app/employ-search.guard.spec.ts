import { TestBed } from '@angular/core/testing';

import { EmploySearchGuard } from './employ-search.guard';

describe('EmploySearchGuard', () => {
  let guard: EmploySearchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmploySearchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
