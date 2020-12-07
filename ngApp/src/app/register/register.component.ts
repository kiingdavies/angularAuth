import { Component, OnInit } from '@angular/core';
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
    password: ''
  };
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
