import { TestBed } from '@angular/core/testing';

import { HttpMotherService } from './http-mother.service';

describe('HttpMotherService', () => {
  let service: HttpMotherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMotherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
