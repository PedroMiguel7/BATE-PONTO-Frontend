import { TestBed } from '@angular/core/testing';

import { AdminCaseService } from './admin-case.service';

describe('AdminCaseService', () => {
  let service: AdminCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
