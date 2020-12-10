import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngApp';

  constructor(private _authService: AuthService) {}

  // this function calls the loggedin method in auth.service
  login() {
    return this._authService.loggedIn();
  }

  // this function calls the logoutUser method in auth.service
  logout() {
    return this._authService.logoutUser();
  }
}
