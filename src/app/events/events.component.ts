import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { EventsListComponent } from '../events-list/events-list.component';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Event } from "../models/event";

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    newEvent: Event = new Event();
    events: Event[];

    constructor(private eventService: EventService, formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            "name": this.name,
            "description": this.description,
            "date": this.date
        });
    }

    form: FormGroup;
    name = new FormControl("", Validators.compose([Validators.maxLength(20), Validators.minLength(5), Validators.required]));
    description = new FormControl("", Validators.compose([Validators.maxLength(150)]));
    date = new FormControl("", Validators.required);

    ngOnInit() {
        this.eventService.getAllEvents()
            .subscribe(
                (data: Event[]) => this.events = data
            );
    }

    createEvent() {
        this.newEvent.name = this.name.value;
        this.newEvent.description = this.description.value;
        this.newEvent.eventDate = this.date.value;
        this.eventService.addEvent(this.newEvent)
            .subscribe(
                event => this.events.push(event)
            );
    }

}
