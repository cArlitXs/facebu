import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    constructor(private eventService: EventService) {}

    event: Event[];

    ngOnInit() {
        this.eventService.getEvents().subscribe(
            (data: Event[]) => (this.event = data),
            error => console.error(error),
            () => console.log("Loaded")
        );
    }

}
