import { TestBed } from '@angular/core/testing';

import { AuthCasesService } from './auth-cases.service';

describe('AuthCasesService', () => {
  let service: AuthCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
