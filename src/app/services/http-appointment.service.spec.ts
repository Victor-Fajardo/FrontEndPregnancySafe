import { TestBed } from '@angular/core/testing';

import { HttpAppointmentService } from './http-appointment.service';

describe('HttpAppointmentService', () => {
  let service: HttpAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
