import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SneakersService } from "../../services/sneakers.service";
import {SneakerInterface} from "../../model/SneakerInterface";

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.scss']
})
export class SneakerComponent implements OnInit {

  sneaker: SneakerInterface;
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true,
    "fade": true,
    "mobileFirst": true
  };

  constructor(
    private sneakersService: SneakersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sneakersService.getSneaker(params['id']).subscribe(
        value => {
          this.sneaker = value;
        },
        error => {
          this.router.navigate([''])
        }
      );
    })
  }

}
