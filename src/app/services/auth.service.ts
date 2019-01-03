import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { UserInfo} from '../models/UserInfo';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


const Api_Url = "https://efa-gardenapp-backend.herokuapp.com/api/auth/login";

@Injectable()
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  loginInfo: UserInfo;

  constructor(private _http: HttpClient, private _router: Router) {
  }

  login(loginInfo) {
    const str =
    `grant_type=password&email=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`${Api_Url}`, str).subscribe( (token: Token) => {
      this.userInfo = token;
      localStorage.setItem('token', token.token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/']);
    });}

    logout() {
      localStorage.clear();
      this.isLoggedIn.next(false);

      const authHeader= new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

      this._http.post(`${Api_Url}/api/Account/Logout`, { headers: authHeader});
      this._router.navigate(['/login']);

    }

    private setHeader(): HttpHeaders {
      return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}  
  

  



