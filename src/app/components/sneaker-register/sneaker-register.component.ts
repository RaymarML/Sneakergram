import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sneaker-register',
  templateUrl: './sneaker-register.component.html',
  styleUrls: ['./sneaker-register.component.scss']
})
export class SneakerRegisterComponent implements OnInit {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authorizationService.currentUser.subscribe(value => {
      if (value != null){
        this.router.navigate(['/Content/LatestPosts']);
      }
    })
  }

}
