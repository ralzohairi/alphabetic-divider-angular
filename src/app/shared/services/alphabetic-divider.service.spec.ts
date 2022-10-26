import { TestBed } from '@angular/core/testing';

import { AlphabeticDividerService } from './alphabetic-divider.service';

describe('AlphabeticDividerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlphabeticDividerService = TestBed.get(AlphabeticDividerService);
    expect(service).toBeTruthy();
  });
});
