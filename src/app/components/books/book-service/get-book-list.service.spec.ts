import { TestBed } from '@angular/core/testing';

import { GetBookListService } from './get-book-list.service';

describe('GetBookDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBookListService = TestBed.get(GetBookListService);
    expect(service).toBeTruthy();
  });
});
