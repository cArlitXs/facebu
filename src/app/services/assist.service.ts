import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assist } from "../models/assist";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AssistService {

    constructor(private http: HttpClient) { }

    url: string = environment.apiUrl.concat("/assist");

    getAllAssists() {
        return this.http.get(this.url);
    }

    addAssist(assist: Assist) {
        return this.http.post<Assist>(this.url, assist);
    }

    updateAssist(assist: Assist) {
        return this.http.put<Assist>(this.url + "/" + assist.id, assist);
    }

    getAssist(userId: number, eventId: number) {
        return this.http.get(this.url + "?user_like=" + userId + "&id_like=" + eventId);
    }

    // There is no user login
    getUserAssists() {
        return this.http.get(this.url+"?user_like=1");
    }

}
