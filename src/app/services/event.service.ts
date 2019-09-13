import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Event } from "../models/event";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(private http: HttpClient) {}

    url: string = environment.apiUrl.concat("/events");

    getAllEvents() {
        return this.http.get(this.url);
    }

    addEvent(event: Event) {
        return this.http.post<Event>(this.url, event);
    }

    // There is no user login
    getUserEvents() {
        return this.http.get(this.url+"?users_like=1");
    }

}
