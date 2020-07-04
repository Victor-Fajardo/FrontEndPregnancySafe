import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PregnancySafe} from '../../../models/pregnancy-safe';
import {HttpPregnancyService} from '../../../services/http-pregnancy.service';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import swal from 'sweetalert2';
import {HttpMotherService} from '../../../services/http-mother.service';

@Component({
  selector: 'app-create-pregnancy-stage',
  templateUrl: './create-pregnancy-stage.component.html',
  styleUrls: ['./create-pregnancy-stage.component.css']
})
export class CreatePregnancyStageComponent implements OnInit {

  pregnancy: PregnancySafe = new PregnancySafe();

  constructor(private httpPregnancyService: HttpPregnancyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.pregnancy);
    this.httpPregnancyService.createSatage(this.pregnancy).subscribe(
      data => this.router.navigate(['PregnancySafe/homemother']));
    swal.fire('Logout', ` ${this.pregnancy.prange}, Se registro en la Base de Datos con éxito!`, 'success');
  }
}
