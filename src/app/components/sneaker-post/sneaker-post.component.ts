import { Component, OnInit } from '@angular/core';
import {Sneaker} from "../../model/Sneaker";
import {SneakersService} from "../../services/sneakers.service";

@Component({
  selector: 'app-sneaker-post',
  templateUrl: './sneaker-post.component.html',
  styleUrls: ['./sneaker-post.component.scss']
})
export class SneakerPostComponent implements OnInit {

  sneakers: Array<Sneaker>;

  constructor(
    private sneakersService: SneakersService
  ) { }

  ngOnInit(): void {
    this.sneakersService.getSneakers().subscribe(
      response => {
        this.sneakers = response;
      },
      error => {
        this.sneakers = [];
      })
  }

}
