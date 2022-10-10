import { TestBed } from '@angular/core/testing';

import { AuthGuardAdminService } from './auth-guard-admin.service';

describe('AuthGuardAdminService', () => {
  let service: AuthGuardAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
