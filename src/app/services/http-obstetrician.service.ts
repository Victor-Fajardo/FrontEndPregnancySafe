import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import { Obstetrician } from '../models/Obstetrician';

@Injectable({
  providedIn: 'root'
})
export class HttpObstetricianService {

  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.error('An error occurred: ', error.error.message);
    }
    else {
      // Unsuccessful Response Code Error returned from Backend
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }
  // SERVICES:
  // Create Mother
  // tslint:disable-next-line:ban-types
  createMother(obstetrician: Object): Observable<Object> {
    return this.http.post('https://pregnancysafeos.azurewebsites.net/api/obstetrician/create', obstetrician, {headers: this.httpHeaders});
  }

  getObstetrician(): Observable<any>{
    return this.http.get('https://pregnancysafeos.azurewebsites.net/api/obstetrician/showAll').pipe(
      map(response => response as Obstetrician[])
    );
  }
}
