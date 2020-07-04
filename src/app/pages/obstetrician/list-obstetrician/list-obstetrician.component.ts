import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import {Observable} from 'rxjs';

import {HttpObstetricianService} from '../../../services/http-obstetrician.service';
import { Obstetrician } from '../../../models/obstetrician';

@Component({
  selector: 'app-list-obstetrician',
  templateUrl: './list-obstetrician.component.html',
  styleUrls: ['./list-obstetrician.component.css']
})
export class ListObstetricianComponent implements OnInit {

  obstetricians: Observable<Obstetrician>;

  constructor(private httpObstetricianService: HttpObstetricianService) { }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData(){
    this.httpObstetricianService.getObstetrician().subscribe(obstetricians => this.obstetricians = obstetricians);
  }

}
