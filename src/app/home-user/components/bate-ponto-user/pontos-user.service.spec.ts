import { TestBed } from '@angular/core/testing';

import { PontosUserService } from './pontos-user.service';

describe('PontosUserService', () => {
  let service: PontosUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PontosUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
