import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SneakersService} from "../../services/sneakers.service";
import {SneakerInterface} from "../../model/SneakerInterface";

@Component({
  selector: 'app-sneaker-popular',
  templateUrl: './sneaker-popular.component.html',
  styleUrls: ['./sneaker-popular.component.scss']
})
export class SneakerPopularComponent implements OnInit {


  sneakers: Array<SneakerInterface>;
  sneakerObservable: Observable<SneakerInterface[]>;

  constructor(
    private sneakersService: SneakersService
  ) {
    this.sneakerObservable = this.sneakersService.getAllSneakers();
  }

  ngOnInit(): void {
    this.sneakerObservable.subscribe(
      response => {
        this.sneakers = response;
      },
      error => {
        this.sneakers = [];
      })
  }

}
