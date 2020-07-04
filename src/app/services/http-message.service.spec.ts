import { TestBed } from '@angular/core/testing';

import { HttpMessageService } from './http-message.service';

describe('HttpMessageService', () => {
  let service: HttpMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
