import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '/DotNetProjects/RedBadge/GardenProject/garden-project/src/app/models/Token';


const Api_Url = "https://efa-gardenapp-backend.herokuapp.com/api/auth/login";

@Injectable()
export class AuthService {
  

  login(loginInfo) {
    const str =
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this._http.post(`${Api_Url}/token`, str).subscribe( (token: Token) => {
      localStorage.setItem('id_token', token.access_token);
    });
}  
  constructor(private _http: HttpClient) {
    
  }

  


} 
