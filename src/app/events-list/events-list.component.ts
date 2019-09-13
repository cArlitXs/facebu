import { Component, OnInit } from "@angular/core";
import { Assist } from "../models/assist";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  constructor() {
    this.setEvents(this.eventsTest);
    this.setAssist(this.assistTest);
  }

  ngOnInit() {}

  eventsTest = [
    {
      id: 1,
      name: "Evento1",
      description: "Desc1",
      eventDate: "12/12/2019",
      users: [1, 2]
    },
    {
      id: 2,
      name: "Evento2",
      description: "Desc2",
      eventDate: "12/12/2019",
      users: [2]
    },
    {
      id: 3,
      name: "Evento3",
      description: "Desc3",
      eventDate: "12/12/2019",
      users: [1]
    }
  ];

  assistTest = [
    {
      user: 1,
      event: 1
    },
    {
      user: 2,
      event: 1
    }
  ];

  eventsArr: Event[];

  assistArr: Assist[];

  _assist: boolean;

  setAssist(a: any[]): void {
    this.assistArr = a;
  }

  setEvents(e: any[]): void {
    this.eventsArr = e;
  }
}
