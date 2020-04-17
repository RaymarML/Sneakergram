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
    const sideMenu = $("app-sneaker-side-menu");
    const mainFrame = $(".main-frame");

    if(sideMenu.hasClass("open-side-nav")){
      sideMenu.removeClass("open-side-nav");
      mainFrame
        .css({"height":"100%"})
        .css({"overflow-y":"scroll"});
    }else {
      sideMenu.addClass("open-side-nav");
      mainFrame
        .css({"height":"100vh"})
        .css({"overflow-y":"hidden"});
    }
  }

  logout() {
    this.authenticationService.signOut();
  }
}
