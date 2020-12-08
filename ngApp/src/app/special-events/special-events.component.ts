import { Component, OnInit } from '@angular/core';
import { EventService } from './../event.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss'],
})
export class SpecialEventsComponent implements OnInit {
  // create an empty array to hold the returned specila events
  specialEvents = [];

  constructor(private _eventService: EventService, private _router: Router) {}

  ngOnInit(): void {
    this._eventService.getSpecialEvents().subscribe(
      (res) => (this.specialEvents = res),
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
