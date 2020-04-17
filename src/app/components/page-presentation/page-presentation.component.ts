import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";
import {SneakerInterface} from "../../model/SneakerInterface";
import {SneakersService} from "../../services/sneakers.service";

@Component({
  selector: 'app-page-presentation',
  templateUrl: './page-presentation.component.html',
  styleUrls: ['./page-presentation.component.scss']
})
export class PagePresentationComponent implements OnInit {

  popularSneakers: SneakerInterface[];
  lastSneakers: SneakerInterface[];


  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private sneakersService: SneakersService
  ) { }

  ngOnInit(): void {
    this.authorizationService.currentUser.subscribe(value => {
      if (value != null) {
        this.router.navigate(['/Content/LatestPosts']);
      }
    });


    this.sneakersService.getMostPopular().subscribe(value => {
      this.popularSneakers = value;
    });

    this.sneakersService.getLastPosts(10).subscribe(value => {
      this.lastSneakers = value;
    });


  }
}
