import { Component, OnInit } from "@angular/core";
import { Assist } from "../models/assist";
import { EventService } from "../services/event.service";
import { AssistService } from '../services/assist.service';

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  constructor(private eventService: EventService, private assistService: AssistService) {}

  ngOnInit() {
    this.eventService
      .getEvents()
      .subscribe(
        (data: Event[]) => (this.eventsArr = data),
        error => console.log(error),
        () => console.log("%cEvent loaded!", "color:blue")
      );
    this.assistService
      .getEvents()
      .subscribe(
        (data: Assist[]) => (this.assistArr = data),
        error => console.log(error),
        () => console.log("%cAssist loaded!", "color:blue")
      );
  }

  eventsArr: Event[];

  assistArr: Assist[];

  // setAssist(a: any[]): void {
  //   this.assistArr = a;
  // }

  setEvents(e: any[]): void {
    this.eventsArr = e;
  }
}
