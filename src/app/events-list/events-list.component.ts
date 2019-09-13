import { Component, OnInit } from "@angular/core";
import { Assist } from "../models/assist";
import { EventService } from '../services/event.service';
import { AssistService } from '../services/assist.service';

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

    _assist: boolean;

    constructor(private eventService: EventService, private assistService: AssistService) { }

    ngOnInit() {
        this.eventService.getUserEvents().subscribe(
            events => { this.eventsArr = events as Event[] }
        );
        this.assistService.getUserAssists().subscribe(
            assits => { this.assistArr = assits as Assist[] }
        );
    }

    insertAssist(eventId: number, state: string) {
        this.assist = {
            "id": 0,
            "user": 1,
            "event": eventId,
            "state": state
        };
        this.assistService.addAssist(this.assist).subscribe(
            assist => this.assistArr.push(assist)
        );
    }

    updateAssist(eventId: number, state: string, assistId: number) {
        this.assist = {
            "id": assistId,
            "user": 1,
            "event": eventId,
            "state": state
        };
        this.assistService.updateAssist(this.assist).subscribe();
    }

    setAssist(a: any[]): void {
        this.assistArr = a;
    }

    setEvents(e: any[]): void {
        this.eventsArr = e;
    }
}
