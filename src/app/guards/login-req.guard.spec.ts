import { TestBed } from '@angular/core/testing';

import { LoginReqGuard } from './login-req.guard';

describe('LoginReqGuard', () => {
  let guard: LoginReqGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginReqGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
