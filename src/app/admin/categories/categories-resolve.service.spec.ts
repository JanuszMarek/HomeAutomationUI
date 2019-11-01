import { TestBed } from '@angular/core/testing';

import { CategoriesResolveService } from './Categories-resolve.service';

describe('CategoriesResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesResolveService = TestBed.get(CategoriesResolveService);
    expect(service).toBeTruthy();
  });
});
