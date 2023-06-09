import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURL = "http://localhost:8080";
  private endpoint = "/customer";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + this.endpoint)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  create(customer: Customer): Observable<any> {

    return this.httpClient.post(this.apiURL + this.endpoint, JSON.stringify(customer), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:string): Observable<any> {

    return this.httpClient.get(this.apiURL + this.endpoint + "/" +id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, customer: Customer): Observable<any> {

    return this.httpClient.put(this.apiURL + this.endpoint + "/" +id, JSON.stringify(customer), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + this.endpoint + "/"+id,{responseType: 'text'})
      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
