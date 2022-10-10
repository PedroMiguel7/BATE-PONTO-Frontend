import { TestBed } from '@angular/core/testing';

import { AuthGuardUserService } from './auth-guard-user.service';

describe('AuthGuardUserService', () => {
  let service: AuthGuardUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
