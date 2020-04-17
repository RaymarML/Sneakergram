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
      },
    )
  }

  openNav(){
    const querySideMenu = $("app-sneaker-side-menu");
    const mainFrame = $("body");

    if (querySideMenu.hasClass("open-side-nav")){
      //mainFrame.addClass("overflow-hidden");
      querySideMenu.removeClass("open-side-nav");
    } else {
      //mainFrame.removeClass("overflow-hidden");
      querySideMenu.addClass("open-side-nav");
    }
  }

  logout() {
    this.authenticationService.signOut();
  }
}
