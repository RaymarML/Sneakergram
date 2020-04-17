import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-sneaker-header',
  templateUrl: './sneaker-header.component.html',
  styleUrls: ['./sneaker-header.component.scss']
})
export class SneakerHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
