import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, } from 'rxjs/operators';
import { Plant} from '../models/plant.model';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  private _dbUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product'
  constructor(private _http: HttpClient) { }
  
  getPlants(): Observable<Plant[]> {
    return this._http.get<Plant[]>(this._dbUrl);
  }

  deletePlants(id : number): Observable<{}> {
    const url = `${this._dbUrl}/${id}`;
    return this._http.delete(url, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
