import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicalAppointmentComponent } from './create-medical-appointment.component';

describe('CreateMedicalAppointmentComponent', () => {
  let component: CreateMedicalAppointmentComponent;
  let fixture: ComponentFixture<CreateMedicalAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMedicalAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicalAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
