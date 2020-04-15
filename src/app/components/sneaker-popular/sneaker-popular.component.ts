import { Component, OnInit } from '@angular/core';
import {SneakersService} from "../../services/sneakers.service";
import {SneakerInterface} from "../../model/SneakerInterface";

@Component({
  selector: 'app-sneaker-popular',
  templateUrl: './sneaker-popular.component.html',
  styleUrls: ['./sneaker-popular.component.scss']
})
export class SneakerPopularComponent implements OnInit {

  sneakers: SneakerInterface[];
  title: string = "Más Populares";

  constructor(
    private sneakersService: SneakersService
  ) {
    this.sneakersService.getMostPopular().subscribe(value => {
      this.sneakers = value.sort((a, b) => {
        return b.likes.length - a.likes.length;
      })
    });
  }

  ngOnInit(): void {
  }

}
