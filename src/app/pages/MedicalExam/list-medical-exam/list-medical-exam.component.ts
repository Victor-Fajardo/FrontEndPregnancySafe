import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import {Observable} from 'rxjs';

import { MedicalExam } from '../../../models/medical-exam';
import {HttpExamenService} from '../../../services/http-examen.service';

@Component({
  selector: 'app-list-medical-exam',
  templateUrl: './list-medical-exam.component.html',
  styleUrls: ['./list-medical-exam.component.css']
})
export class ListMedicalExamComponent implements OnInit {


  medicalExams: Observable<MedicalExam>;

  constructor(private httpExamenService: HttpExamenService) {
  }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.httpExamenService.getExams().subscribe(medicalExams => this.medicalExams = medicalExams);
  }

}
