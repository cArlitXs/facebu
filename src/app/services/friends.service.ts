import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Relationship } from '../models/relationship';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  url: string = environment.apiUrl.concat("/relationship");

  getRelationship(){
    return this.http.get(this.url);
  }

  deleteRelationship(id: number){
    return this.http.delete(this.url.concat('/').concat(id.toString()));
  }
}
