import { TestBed } from '@angular/core/testing';

import { HttpPregnancyService } from './http-pregnancy.service';

describe('HttpPregnancyService', () => {
  let service: HttpPregnancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPregnancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
