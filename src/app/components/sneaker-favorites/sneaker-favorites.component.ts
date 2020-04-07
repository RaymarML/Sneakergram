import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SneakersService} from "../../services/sneakers.service";
import {SneakerInterface} from "../../model/SneakerInterface";

@Component({
  selector: 'app-sneaker-favorites',
  templateUrl: './sneaker-favorites.component.html',
  styleUrls: ['./sneaker-favorites.component.scss']
})
export class SneakerFavoritesComponent implements OnInit {

  title:string = "En Favoritos";
  sneakerObservable: Observable<SneakerInterface[]>;

  constructor(
    private sneakersService: SneakersService
  ) {

  }

  ngOnInit(): void {
    this.sneakerObservable = this.sneakersService.getFavorites();
  }

}
