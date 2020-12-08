// this service is for authentication ie Register and Login
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register'; // this holds the url to register endpoint
  private _loginUrl = 'http://localhost:3000/api/login'; // this holds the url to login endpoint
  constructor(private http: HttpClient) {}

  registerUser(user) {
    // user parameter is the object containing user email and password
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    // user parameter is the object containing user email and password
    return this.http.post<any>(this._loginUrl, user);
  }

  // this function checks if user is registered or not to be able to view the specila events
  loggedIn() {
    return !!localStorage.getItem('token'); // double negation !! makes the return value either true or false
  }
}
