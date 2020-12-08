import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // registerUserData is the object containung the email and password of the user about to be registered
  registerUserData = {
    email: '',
    password: '',
  };
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  // function to register new user when called
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        // console.log(res)
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']); // this navigates us to special events route when registered successfully
      },
      (err) => console.log(err)
    );
  }
}
