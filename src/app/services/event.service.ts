import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs";
//import { Event } from "../models/event";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EventService {

    constructor(private http: HttpClient) { }

    getEvents() {
        return this.http.get(environment.apiUrl.concat("/events"));
    }

}
