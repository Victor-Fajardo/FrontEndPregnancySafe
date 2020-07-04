import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicalAppointmentComponent } from './list-medical-appointment.component';

describe('ListMedicalAppointmentComponent', () => {
  let component: ListMedicalAppointmentComponent;
  let fixture: ComponentFixture<ListMedicalAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedicalAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicalAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
