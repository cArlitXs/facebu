import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'facebu/src/environments/environment';
import { User } from 'facebu/src/app/models/user';

@Injectable({
  providedIn: 'root'
})


export class ProfileService {

  constructor(private http: HttpClient) { }
  // url: string = environment.apiUrl.concat("/events");
  url: string = "http://localhost:3000/users";

  getUser(id:number){
      return this.http.get(this.url+'/'+id);
  }


  putUser(user:User){
  return this.http.put<User>(this.url + "/" + user.id, user);
  }

}
