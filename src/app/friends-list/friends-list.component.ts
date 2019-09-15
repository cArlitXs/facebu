import { Component, OnInit } from "@angular/core";
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

  ngOnInit() {
    this.getRelationship();
  }

  getRelationship() {
    this.friendService.getRelationship().subscribe(
      relation => {
        this.relationsArr = relation as Relationship[];
      },
      error => console.error(error),
      () => {
        this.setUsers();
      }
    );
  }

  findUserById(id: number) {
    this.userService.findById(id).subscribe(
      user => {
        this.userTarget = user as User;
      },
      error => console.error(error),
      () => {
        this.userTargetArr.push(this.userTarget);
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

  deleteFriend() {
    console.log("Delete relationship");
  }
}
