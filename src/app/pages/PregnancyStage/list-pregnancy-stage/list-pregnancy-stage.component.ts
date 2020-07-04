import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import {Observable} from 'rxjs';

import {PregnancySafe} from '../../../models/pregnancy-safe';
import {HttpPregnancyService} from '../../../services/http-pregnancy.service';
import {Mother} from '../../../models/mother';
import {HttpMotherService} from '../../../services/http-mother.service';

@Component({
  selector: 'app-list-pregnancy-stage',
  templateUrl: './list-pregnancy-stage.component.html',
  styleUrls: ['./list-pregnancy-stage.component.css']
})
export class ListPregnancyStageComponent implements OnInit {

  stages: Observable<PregnancySafe>;

  constructor(private httpPregnancyService: HttpPregnancyService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.httpPregnancyService.getSatages().subscribe(stages => this.stages = stages);
  }

}
