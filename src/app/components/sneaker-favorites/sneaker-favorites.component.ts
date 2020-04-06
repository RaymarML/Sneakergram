import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Sneaker} from "../../model/Sneaker";
import {SneakersService} from "../../services/sneakers.service";

@Component({
  selector: 'app-sneaker-favorites',
  templateUrl: './sneaker-favorites.component.html',
  styleUrls: ['./sneaker-favorites.component.scss']
})
export class SneakerFavoritesComponent implements OnInit {

  title:string = "En Favoritos";
  sneakerObservable: Observable<Array<Sneaker>>;

  constructor(
    private sneakersService: SneakersService
  ) {
    this.sneakerObservable = this.sneakersService.getSneakers();
  }

  ngOnInit(): void {

  }

}
