import { TestBed } from '@angular/core/testing';

import { GlobomaticsService } from './globomatics.service';

describe('GlobomaticsService', () => {
  let service: GlobomaticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobomaticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
