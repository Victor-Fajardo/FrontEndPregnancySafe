import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Mother} from '../../../models/mother';
import {HttpMotherService} from '../../../services/http-mother.service';
import {PregnancySafe} from '../../../models/pregnancy-safe';
import {HttpPregnancyService} from '../../../services/http-pregnancy.service';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import swal from 'sweetalert2';


@Component({
  selector: 'app-create-mother',
  templateUrl: './create-mother.component.html',
  styleUrls: ['./create-mother.component.css']
})
export class CreateMotherComponent implements OnInit {

  mother: Mother = new Mother();
  stages: PregnancySafe[] = [];

  constructor(private httpMotherService: HttpMotherService, private httpPregnancyService: HttpPregnancyService,
              private router: Router) { }

  ngOnInit(): void {
    this.sta();
  }

  sta(){
    this.httpPregnancyService.getSatages().subscribe(stages => this.stages = stages);
    console.log(this.stages);
  }

  save(){
    console.log(this.mother);
    this.httpMotherService.createMother(this.mother).subscribe(
      data => this.router.navigate(['mother-list']));
    swal.fire('Logout', `Hola ${this.mother.firstName}, has cerrado sesión con éxito!`, 'success');
  }

  typeS(o1: PregnancySafe, o2: PregnancySafe): boolean{
    if (o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.id === o2.id;
  }
}
