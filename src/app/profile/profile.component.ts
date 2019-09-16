import { Component, OnInit } from '@angular/core';
import { User } from '../../app/models/user';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) {

    //   let u = {
    //     "name": "USUARIO2",
    //     "surname": "APELLIDOS2",
    //     "birdthDate": "12/12/2019",
    //     "startDate": "12/12/2019",
    //     "user": "user",
    //     "pass": "pass",
    //     "id": 2
    // };
    // this.setUser(u);
  }

  ngOnInit() {
    this.callGetUser();
  }

  usuario: User;
  editUser: String;

  callGetUser() {
    this.profileService.getUser(1).subscribe(
      u => { this.usuario = u as User }
    );
  }

  editProfile(u: User): void {
    let res = this.profileService.putUser(u).subscribe();
    console.log(res);

    this.callGetUser();
  }
}


