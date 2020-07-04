import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import {Observable} from 'rxjs';


// Mother:
import { Mother } from '../models/mother';

@Injectable({
  providedIn: 'root'
})
export class HttpMotherService {

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
  createMother(mother: Object): Observable<Object> {
    return this.http.post('https://pregnancysafeos.azurewebsites.net/api/mother/create', mother, {headers: this.httpHeaders});
  }

  getMothers(): Observable<any>{
    return this.http.get('https://pregnancysafeos.azurewebsites.net/api/mother/showAll').pipe(
      map(response => response as Mother[])
    );
  }

}
