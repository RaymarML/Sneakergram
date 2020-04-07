import { Component } from '@angular/core';
import {AuthorizationService} from "./services/authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Sneakergram';
  userLogged: boolean;

  constructor(
    private authenticationService: AuthorizationService
  ) {
    this.authenticationService.currentUser.subscribe(
      value => {
        console.log(value)
      },
      error => {
        console.log(error)
      }
    );


  }




}
