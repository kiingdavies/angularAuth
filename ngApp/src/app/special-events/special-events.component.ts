import { Component, OnInit } from '@angular/core';
import { EventService } from './../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss'],
})
export class SpecialEventsComponent implements OnInit {
  // create an empty array to hold the returned specila events
  specialEvents = [];

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this._eventService.getSpecialEvents().subscribe(
      (res) => (this.specialEvents = res),
      (err) => console.log(err)
    );
  }
}
