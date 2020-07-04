import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Obstetrician } from '../../../models/Obstetrician';
import {HttpObstetricianService} from '../../../services/http-obstetrician.service';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-obstetrician',
  templateUrl: './create-obstetrician.component.html',
  styleUrls: ['./create-obstetrician.component.css']
})
export class CreateObstetricianComponent implements OnInit {

  obstetrician: Obstetrician = new Obstetrician();

  constructor(private httpObstetricianService: HttpObstetricianService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.obstetrician);
    this.httpObstetricianService.createMother(this.obstetrician).subscribe(
      data => this.router.navigate(['PregnancySafe/homeobstetrician/obstetrician-list']));
    swal.fire('Logout', ` ${this.obstetrician.firstName}, Se registro en la Base de Datos con éxito!`, 'success');
  }
}
