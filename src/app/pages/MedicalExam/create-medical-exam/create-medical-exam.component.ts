import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

import { MedicalExam } from '../../../models/medical-exam';
import {HttpExamenService} from '../../../services/http-examen.service';
import {HttpMotherService} from '../../../services/http-mother.service';
import {HttpObstetricianService} from '../../../services/http-obstetrician.service';

import { Mother } from '../../../models/mother';
import { Obstetrician } from '../../../models/obstetrician';

@Component({
  selector: 'app-create-medical-exam',
  templateUrl: './create-medical-exam.component.html',
  styleUrls: ['./create-medical-exam.component.css']
})
export class CreateMedicalExamComponent implements OnInit {

  exam: MedicalExam = new MedicalExam();
  mothers: Mother[] = [];
  obstetricians: Obstetrician[] = [];

  constructor(private httpExamenService: HttpExamenService, private httpMotherService: HttpMotherService,
              private httpObstetricianService: HttpObstetricianService,
              private router: Router) { }

  ngOnInit(): void {
    this.mot();
    this.obs();
  }

  mot(){
    this.httpMotherService.getMothers().subscribe(mothers => this.mothers = mothers);
    console.log(this.mothers);
  }

  obs(){
    this.httpObstetricianService.getObstetrician().subscribe(obstetricians => this.obstetricians = obstetricians);
    console.log(this.obstetricians);
  }

  save(){
    console.log(this.exam);
    this.httpExamenService.createExam(this.exam).subscribe(
      data => this.router.navigate(['PregnancySafe/homemother']));
    swal.fire('Registrado', `${this.exam.examType}, Se guardo en la Base de Datos con éxito!`, 'success');
  }

  typeM(o1: Mother, o2: Mother): boolean{
    if (o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.id === o2.id;
  }

  typeO(o1: Obstetrician, o2: Obstetrician): boolean{
    if (o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.id === o2.id;
  }
}
