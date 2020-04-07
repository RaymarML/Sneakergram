import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
declare var $:any;

@Component({
  selector: 'app-sneaker-side-menu',
  templateUrl: './sneaker-side-menu.component.html',
  styleUrls: ['./sneaker-side-menu.component.scss']
})
export class SneakerSideMenuComponent implements OnInit {

  userLog: boolean = false;

  constructor(
    private authenticationService: AuthorizationService
  ) {

  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(
      value => {
        this.userLog = value != null;
        console.log(this.userLog);
      },
      error => {
        this.userLog = false;
      }
    )
  }

  openNav(){
    $("app-sneaker-side-menu").toggle();
  }

  logout() {
    this.authenticationService.signOut();
  }
}
