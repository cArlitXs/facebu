import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  open: boolean = false;

  userName: string = "Name Surname";

  toogleOpen() {
    this.open = !this.open;
  }

  setUserName(user:string){
    this.userName = user;
  }
  
}
