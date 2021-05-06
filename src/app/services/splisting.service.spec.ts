import { TestBed } from '@angular/core/testing';

import { SplistingService } from './splisting.service';

describe('SplistingService', () => {
  let service: SplistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
