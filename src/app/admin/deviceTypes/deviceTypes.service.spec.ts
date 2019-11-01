import { TestBed } from '@angular/core/testing';
import { DeviceTypesService } from './deviceTypes.service';

describe('DeviceTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceTypesService = TestBed.get(DeviceTypesService);
    expect(service).toBeTruthy();
  });
});
