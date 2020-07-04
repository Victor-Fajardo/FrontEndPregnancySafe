import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import {Observable} from 'rxjs';

import { MedicalAppointment } from '../../../models/medical-appointment';
import {HttpAppointmentService} from '../../../services/http-appointment.service';

@Component({
  selector: 'app-list-medical-appointment',
  templateUrl: './list-medical-appointment.component.html',
  styleUrls: ['./list-medical-appointment.component.css']
})
export class ListMedicalAppointmentComponent implements OnInit {

  medicalAppointments: Observable<MedicalAppointment>;

  constructor(private httpAppointmentService: HttpAppointmentService) {
  }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.httpAppointmentService.getExams().subscribe(medicalAppointments => this.medicalAppointments = medicalAppointments);
  }
}
