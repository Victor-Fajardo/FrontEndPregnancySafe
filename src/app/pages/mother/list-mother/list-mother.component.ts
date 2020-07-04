import {Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Mother} from '../../../models/mother';
import {HttpMotherService} from '../../../services/http-mother.service';
import swal from 'sweetalert2';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-list-mother',
  templateUrl: './list-mother.component.html',
  styleUrls: ['./list-mother.component.css']
})
export class ListMotherComponent implements OnInit {

  mothers: Observable<Mother>;

  constructor(private httpMotherService: HttpMotherService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.httpMotherService.getMothers().subscribe(mothers => this.mothers = mothers);
  }

}
