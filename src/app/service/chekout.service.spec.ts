import { TestBed } from '@angular/core/testing';

import { ChekoutService } from './chekout.service';

describe('ChekoutService', () => {
  let service: ChekoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChekoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
