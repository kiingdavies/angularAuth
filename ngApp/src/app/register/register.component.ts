import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // registerUserData is the object containung the email and password of the user about to be registered
  registerUserData = {};
  constructor() {}

  ngOnInit(): void {}

  registerUser() {
    console.log(this.registerUserData);
  }
}
