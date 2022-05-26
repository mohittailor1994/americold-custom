import { TestBed } from '@angular/core/testing';

import { AssumeService } from './assume.service';

describe('AssumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssumeService = TestBed.get(AssumeService);
    expect(service).toBeTruthy();
  });
});
