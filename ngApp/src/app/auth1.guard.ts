import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {

  constructor(private _authService: AuthserviceService, private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {

      return true;
    }
    else {
      this._router.navigate(['/login'])
      return false;
    }
  }
}
