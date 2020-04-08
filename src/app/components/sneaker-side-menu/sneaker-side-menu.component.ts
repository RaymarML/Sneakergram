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
  popularHeader:string = "Más Popular";
  postHeader:string = "Últimos Post";

  constructor(
    private authenticationService: AuthorizationService
  ) {

  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(
      value => {
        this.userLog = value != null;
      },
      error => {
        this.userLog = false;
      }
    )
  }

  openNav(){
    $("app-sneaker-side-menu").toggleClass("open-side-nav");
  }

  logout() {
    this.authenticationService.signOut();
  }
}
