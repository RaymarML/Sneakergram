import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-presentation',
  templateUrl: './page-presentation.component.html',
  styleUrls: ['./page-presentation.component.scss']
})
export class PagePresentationComponent implements OnInit {


  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.authorizationService.currentUser.subscribe(value => {
      if (value != null) {
        this.router.navigate(['/Content/LatestPosts']);
      }
    });
  }

}
