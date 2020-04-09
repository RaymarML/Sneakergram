import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {UserInterface} from "../../model/UserInterface";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  loggedUser: UserInterface;

  constructor(
    private authorizationService: AuthorizationService
  ) {

    this.authorizationService.currentUser.subscribe(
      value => {
        if(value)
          this.loggedUser = {
            email: value.email,
            userName: value.displayName,
            uid: value.uid,
            photoUrl: value.photoURL
          }
        else this.loggedUser = null;
      }
    )
  }

  ngOnInit(): void {
  }

}
