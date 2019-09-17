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

  // Corregir esta mierda
  getRelationship(){
    return this.http.get(this.url);
  }

  getUserOrigin(){
    return this.http.get(this.url + '?userOrigin_like=1');
  }

  getUserTarget(){
    return this.http.get(this.url + '?userTarget_like=1');
  }

  deleteRelationship(id: number){
    return this.http.delete(this.url + '/' + id);
  }
}
