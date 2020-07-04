import { TestBed } from '@angular/core/testing';

import { HttpExamenService } from './http-examen.service';

describe('HttpExamenService', () => {
  let service: HttpExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
