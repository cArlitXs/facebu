import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-stories-list',
    templateUrl: './stories-list.component.html',
    styleUrls: ['./stories-list.component.css']
})
export class StoriesListComponent implements OnInit {

    constructor(private storiesService: StoriesService, private userService: UserService) { }

    users: User[] = new Array();
    observableMessages: Observable<Object>[] = new Array();
    messages: Message[] = new Array();
    allMessages: any[] = new Array();
    user: User;
    begin: boolean = false;

    ngOnInit() {
        this.loadUsers();
        this.showAllMessages();
    }

    loadUsers() {
        this.userService.getAllUsers().subscribe(
            users => {
                this.users = users as User[];
            }
        )
    }

    showAllMessages() {
        this.allMessages = [];
        this.observableMessages = [];
        this.messages = [];
        this.storiesService.getAllMessages().forEach(
            observable => {
                observable.subscribe(
                    userMessages => {
                        this.messages = userMessages as Message[];
                        console.log(this.messages);
                        this.messages.forEach(innerMessage => {
                            innerMessage['userName'] = this.users.find(user => user.id == innerMessage.user).name;
                            this.allMessages.push(innerMessage);
                        })
                    }
                );
            }
        );
    }

    /*getUserName(userId: number) {
      this.storiesService.getUseName(userId).subscribe(user => {
        this.user = user as User;
        return this.user.name;
      });
    }*/

}
