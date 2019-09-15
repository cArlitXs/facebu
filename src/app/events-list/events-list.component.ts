import { Component, OnInit } from "@angular/core";
import { Assist } from "../models/assist";
import { EventService } from "../services/event.service";
import { AssistService } from "../services/assist.service";
import { User } from "../models/user";
import { Event } from "../models/event";
import { EventsDto } from "../models/events-dto";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  assist: Assist;
  event: Event;

  eventsArr: Event[];
  assistArr: Assist[];
  asistencia: Assist[];

  constructor(
    private eventService: EventService,
    private assistService: AssistService
  ) {}

  ngOnInit() {
    this.eventService.getUserEvents().subscribe(
      events => {
        this.eventsArr = events as Event[];
      },
      error => console.log(error)
    );
    this.assistService.getUserAssists().subscribe(
      assits => {
        this.assistArr = assits as Assist[];
      },
      error => console.log(error)
    );
    this.arrayLocal();
  }

  insertAssist(eventId: number, state: boolean) {
    this.assist = {
      id: 0,
      user: 1,
      event: eventId,
      state: state
    };
    this.assistService
      .addAssist(this.assist)
      .subscribe(assist => this.assistArr.push(assist));
  }

  updateAssist(eventId: number, state: boolean, assistId: number) {
    this.assist = {
      id: assistId,
      user: 1,
      event: eventId,
      state: state
    };
    this.assistService.updateAssist(this.assist).subscribe();
  }

  setAssistArr(a: any[]): void {
    this.assistArr = a;
  }

  setEventsArr(e: any[]): void {
    this.eventsArr = e;
  }

  confirmAssist(e: Event): void {
    this.eventService.updateEvent(e);

    this.assistService.getAssist(1, e.id).subscribe(assits => {
      this.asistencia = assits as Assist[];
    });

    this.assistService.updateAssist(this.asistencia[0]);
  }

  declineAssist(e: Event): void {
    // this.eventService.updateEvent(e);
    // this.assistService.getAssist(1, e.id).subscribe(assits => {
    //   this.asistencia = assits as Assist;
    // });
    // this.asistencia.state = false;
    // this.assistService.updateAssist(this.asistencia);
  }

  // eventLocalArr: EventsDto[];

  // arrayLocal() {
  //   let eventLocal: EventsDto;
  //   for (let i of this.eventsArr) {
  //     eventLocal = {
  //       id: i.id,
  //       name: i.name,
  //       description: i.description,
  //       eventDate: i.eventDate,
  //       users: i.users,
  //       checked: this.checkedAssist(i.id, 1)
  //     };
  //     this.eventLocalArr.push(eventLocal);
  //   }
  // }

  // checkedAssist(eventId: number, userId: number): boolean {
  //   this.assistService.getAssist(userId, eventId).subscribe(assits => {
  //     this.asistencia = assits as Assist[];
  //   });

  //   return this.asistencia[0].state;
  // }
}
