import { TestBed } from '@angular/core/testing';

import { UserCaseService } from './user-case.service';

describe('UserCaseService', () => {
  let service: UserCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
