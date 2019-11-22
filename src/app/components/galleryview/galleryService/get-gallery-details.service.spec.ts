import { TestBed } from '@angular/core/testing';

import { GetGalleryDetailsService } from './get-gallery-details.service';

describe('GetGalleryDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetGalleryDetailsService = TestBed.get(GetGalleryDetailsService);
    expect(service).toBeTruthy();
  });
});
