import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'app-sneaker-main',
  templateUrl: './sneaker-main.component.html',
  styleUrls: ['./sneaker-main.component.scss']
})
export class SneakerMainComponent implements OnInit {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
    this.authorizationService.currentUser.subscribe(value => {
      if(value != null) this.router.navigate(['/Content/LatestPosts'])
    })
  }

  ngOnInit(): void {}

}
