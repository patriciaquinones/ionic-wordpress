import { TestBed } from '@angular/core/testing';

import { WordPressService } from './wordpress.service';

describe('WordpressService', () => {
  let service: WordPressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordPressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
