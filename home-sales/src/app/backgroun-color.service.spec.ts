import { TestBed } from '@angular/core/testing';

import { BackgrounColorService } from './backgroun-color.service';

describe('BackgrounColorService', () => {
  let service: BackgrounColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgrounColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
