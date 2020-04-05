import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-sneaker-side-menu',
  templateUrl: './sneaker-side-menu.component.html',
  styleUrls: ['./sneaker-side-menu.component.scss']
})
export class SneakerSideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    $("app-sneaker-side-menu").toggle();
  }

}
