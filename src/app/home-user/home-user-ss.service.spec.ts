import { TestBed } from '@angular/core/testing';

import { HomeUserSsService } from './home-user-ss.service';

describe('HomeUserSsService', () => {
  let service: HomeUserSsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeUserSsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
