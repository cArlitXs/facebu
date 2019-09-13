import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relationship } from "../models/relationship";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class RelationsService {

    constructor(private http: HttpClient) { }

    url: string = environment.apiUrl.concat("/relationship");

    getAllRelations() {
        return this.http.get(this.url);
    }

    createRelation(Relation: Relationship) {
        return this.http.post<Relationship>(this.url, Relation);
    }

    // All user relations
    getSendedRelations() {
        return this.http.get(this.url+"?userOrigin_like=1");
    }
    getReceivedRelations() {
        return this.http.get(this.url+"?userTarget_like=1");
    }

    // All friends
    getSendedFriends() {
        return this.http.get(this.url+"?userOrigin_like=1&state_like=friends");
    }
    getReceivedFriends() {
        return this.http.get(this.url+"?userTarget_like=1&state_like=friends");
    }

    // Remove friend
    removeRelation(relationId: number) {
        return this.http.delete(this.url+"/"+relationId);
    }

}
