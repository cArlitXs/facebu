import { Component, OnInit, SimpleChanges } from "@angular/core";
import { Relationship } from "../models/relationship";
import { FriendsService } from "../services/friends.service";
import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-friends-list",
  templateUrl: "./friends-list.component.html",
  styleUrls: ["./friends-list.component.css"]
})
export class FriendsListComponent implements OnInit {
  constructor(
    private friendService: FriendsService,
    private userService: UserService
  ) {}

  relationsArr: Relationship[] = new Array();
  userOriginId: number;
  userTargetId: number[] = new Array();
  userTarget: User;
  userTargetArr: User[] = new Array();
  searchText: string = '';
  allUsers: User[] = new Array();

  userClick: User = {
    name: "",
    surname: "",
    birdthDate: "",
    startDate: "",
    user: "",
    pass: "",
    id: 0
  };

  ngOnInit() {
    this.getRelationship();
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      data => {
        this.allUsers = data as User[];
      }
    );
  }

  getRelationship() {
    this.relationsArr = [];
    this.userTargetId = [];
    this.userTargetArr = [];
    this.friendService.getRelationship().subscribe(
      relation => {
        this.relationsArr = relation as Relationship[];
        this.setUsers();
      },
      error => console.error(error)
    );
  }

  findUserById(id: number) {
    this.userTarget = null;
    this.userService.findById(id).subscribe(
      user => {
        this.userTarget = user as User;
      },
      error => console.error(error),
      () => {
        this.userTargetArr.push(this.userTarget);
        if (this.userTargetArr.length > 0) {
          this.userClick = this.userTargetArr[0];
        } else {
          this.userClick = {
            name: "",
            surname: "",
            birdthDate: "",
            startDate: "",
            user: "",
            pass: "",
            id: 0
          };
        }
      }
    );
  }

  setUsers() {
    for (let i of this.relationsArr) {
      if (i.userOrigin == 1) {
        this.userOriginId = i.userOrigin;
        this.userTargetId.push(i.userTarget);
        this.findUserById(i.userTarget);
      }
    }
  }

  deleteFriend(userTarget: User) {
    console.log(userTarget.id);

    this.userTargetArr = [];

    for (let i of this.relationsArr) {
      if (i.userOrigin == 1 && i.userTarget == userTarget.id) {
        this.friendService.deleteRelationship(i.id).subscribe(data => {
          this.getRelationship();
        });
      }
    }
  }

  setShowUser(user: User) {
    this.userClick = user;
  }
}
