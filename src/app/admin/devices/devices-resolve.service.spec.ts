import { TestBed } from '@angular/core/testing';

import { DevicesResolveService } from './devices-resolve.service';

describe('DevicesResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevicesResolveService = TestBed.get(DevicesResolveService);
    expect(service).toBeTruthy();
  });
});
