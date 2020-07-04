import { TestBed } from '@angular/core/testing';

import { HttpObstetricianService } from './http-obstetrician.service';

describe('HttpObstetricianService', () => {
  let service: HttpObstetricianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpObstetricianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
