import { TestBed } from '@angular/core/testing';

import { ProducersResolveService } from './producers-resolve.service';

describe('ProducersResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProducersResolveService = TestBed.get(ProducersResolveService);
    expect(service).toBeTruthy();
  });
});
