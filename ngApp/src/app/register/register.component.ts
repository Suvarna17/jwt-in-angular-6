import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthserviceService,private _router:Router) { }

  registerUserData = {}

  ngOnInit() {
  }

  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }

}
