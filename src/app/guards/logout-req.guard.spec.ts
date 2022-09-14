import { TestBed } from '@angular/core/testing';

import { LogoutReqGuard } from './logout-req.guard';

describe('LogoutReqGuard', () => {
  let guard: LogoutReqGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogoutReqGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
