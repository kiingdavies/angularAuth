// this service handles events
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _eventsUrl = 'http://localhost:3000/api/events'; // this holds the url to events endpoint
  private _specialEventsUrl = 'http://localhost:3000/api/special'; // this holds the url to special events endpoint

  constructor(private http: HttpClient) {}
  // method to get the list of all events
  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  // method to get the array of all special events
  getSpecialEvents() {
   return this.http.get<any>(this._specialEventsUrl);
  }
}
