import { TestBed } from '@angular/core/testing';

import { GetBookDetailsService } from './get-book-details.service';

describe('GetBookDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBookDetailsService = TestBed.get(GetBookDetailsService);
    expect(service).toBeTruthy();
  });
});
