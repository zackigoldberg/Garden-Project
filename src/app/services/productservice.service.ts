import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
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

  private _dbUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product'
  constructor(private _http: HttpClient) { }
  
  getPlants(): Observable<Plant[]> {
    return this._http.get<Plant[]>(this._dbUrl);
  }

  deletePlants(): Observable<Plant[]> {
    return this._http.delete<Plant[]> (this._dbUrl)
  }
}
