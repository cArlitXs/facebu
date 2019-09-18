import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { RelationsService } from './relations.service';
import { Relationship } from '../models/relationship';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  relationsOrigin: Relationship[];
  relationsTarget: Relationship[];
  friendsOriginIds: number[] = new Array();
  friendsTargetIds: number[] = new Array();
  result: Observable<Object>[] = new Array();
  toggleBoolean: boolean = true;
  loadCompleted: boolean = false;

  constructor(private http: HttpClient, private relationsService: RelationsService) { }

  url: string = environment.apiUrl.concat("/messages");

  getAllUserMessages() {
    return this.http.get(this.url + "?user_like=1");
  }

  /*async asyncLoadMessages() {
    await this.resolveAfter1Second();
  }

  resolveAfter1Second() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          this.loadAllMessagesAsync()
        );
      }, 1000);
    });
  }

  getAllMessages(): Observable<Object>[] {
    this.asyncLoadMessages().then(() => {
      return this.result;
    });
  }*/

  /*loadAllMessagesAsync() {
    this.result.push(this.http.get(this.url + "?user_like=1"));
    this.relationsService.getAllFriends().forEach(observableFriends => observableFriends.subscribe(
      relations => {
        if (this.toggleBoolean) {
          this.toggleBoolean = !this.toggleBoolean;
          this.relationsOrigin = relations as Relationship[];
          this.relationsOrigin.forEach(relation => {
            this.friendsOriginIds.push(relation.userTarget);
          });
          this.friendsOriginIds.forEach(friendId => {
            this.result.push(this.http.get(this.url + "?user_like=" + friendId));
          });
        } else {
          this.toggleBoolean = !this.toggleBoolean;
          this.relationsTarget = relations as Relationship[];
          this.relationsTarget.forEach(relation => {
            this.friendsTargetIds.push(relation.userOrigin);
          });
          this.friendsTargetIds.forEach(friendId => {
            this.result.push(this.http.get(this.url + "?user_like=" + friendId));
          });
        }
      }
    ));
  }*/

  finishLoadMessages() {
    this.loadCompleted = true;
  }

  /*getAllMessages(): Observable<Object>[] {
    return this.result;
  }*/

  getAllMessages(): Observable<Object>[] {
    this.result.push(this.http.get(this.url + "?user_like=1"));
    this.relationsService.getAllFriends().forEach(observableFriends => observableFriends.subscribe(
      relations => {
        if (this.toggleBoolean) {
          this.toggleBoolean = !this.toggleBoolean;
          this.relationsOrigin = relations as Relationship[];
          this.relationsOrigin.forEach(relation => {
            this.friendsOriginIds.push(relation.userTarget);
          });
          this.friendsOriginIds.forEach(friendId => {
            this.result.push(this.http.get(this.url + "?user_like=" + friendId));
          });
        } else {
          this.toggleBoolean = !this.toggleBoolean;
          this.relationsTarget = relations as Relationship[];
          this.relationsTarget.forEach(relation => {
            this.friendsTargetIds.push(relation.userOrigin);
          });
          this.friendsTargetIds.forEach(friendId => {
            this.result.push(this.http.get(this.url + "?user_like=" + friendId));
          });
          this.finishLoadMessages();
        }
      }
    ));
    return this.result;
  }

    /*this.relationsService.getSendedFriends().subscribe(
      relations => {
        this.relationsOrigin = relations as Relationship[];
        this.relationsOrigin.forEach(relation => {
          this.friendsOriginIds.push(relation.userTarget);
        });
        this.friendsOriginIds.forEach(friendId => {
          this.result.push(this.http.get(this.url + "?user_like=" + friendId));
        });
      }
    );
    this.relationsService.getReceivedFriends().subscribe(
      relations => {
        this.relationsTarget = relations as Relationship[];
        this.relationsTarget.forEach(relation => {
          this.friendsTargetIds.push(relation.userOrigin);
        });
        this.friendsTargetIds.forEach(friendId => {
          this.result.push(this.http.get(this.url + "?user_like=" + friendId));
        });
      }
    );
    //this.result.push(this.http.get(this.url + "?user_like=1"));
    return this.result;
  }*/

  getMessage(idMessage: number) {
    return this.http.get(this.url + "?id_like=" + idMessage);
  }

  getUseName(userId: number) {
    return this.http.get(environment.apiUrl + "/users?id_like=" + userId);
  }

  addMessage(content: string) {
    
  }

}
