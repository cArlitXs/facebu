import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  url: string = environment.apiUrl.concat("/relationship");

  getRelationship(){
    return this.http.get(this.url);
  }

  
}
