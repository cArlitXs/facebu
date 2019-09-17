import { Component, OnInit } from "@angular/core";
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserName(1);
  }

  open: boolean = false;

  user: User;

  userName: string = "";

  getUserName(id: number){
    this.userService.findById(id).subscribe(
      data => {
        this.user = data as User;
        this.userName = this.user.name.concat(' ').concat(this.user.surname);
      }
    );
  }

  toogleOpen() {
    this.open = !this.open;
  }

  setUserName(user:string){
    this.userName = user;
  }
}
