import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private _registerUrl = "http://localhost:3300/api/register"
  private _loginUrl = "http://localhost:3300/api/login"

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    console.log("url", this._registerUrl);
    // this.http.post(url, body, options, header, param)
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    console.log("url", this._loginUrl);
    // this.http.post(url, body, options, header, param)
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    // console.log(!!localStorage.getItem('token'))
    return !!localStorage.getItem('token')
  }


  getToken() {
    return localStorage.getItem('token')
  }

  logout()
  {
    this._router.navigate(['/events'])
    return localStorage.removeItem('token');
  }
}
