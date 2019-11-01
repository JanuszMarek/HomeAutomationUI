import { TestBed } from '@angular/core/testing';

import { DeviceTypesResolveService } from './deviceTypes-resolve.service';

describe('DeviceTypeResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceTypesResolveService = TestBed.get(DeviceTypesResolveService);
    expect(service).toBeTruthy();
  });
});
