import { Component, OnInit } from '@angular/core';
import {SneakersService} from "../../services/sneakers.service";
import {Observable} from "rxjs";
import {Sneaker} from "../../model/Sneaker";

@Component({
  selector: 'app-sneaker-post',
  templateUrl: './sneaker-post.component.html',
  styleUrls: ['./sneaker-post.component.scss']
})
export class SneakerPostComponent implements OnInit {

  title:string = "Últimos Posts";
  sneakerObservable: Observable<Array<Sneaker>>;

  constructor(
    private sneakersService: SneakersService
  ) {
    this.sneakerObservable = this.sneakersService.getSneakers();
  }

  ngOnInit(): void {

  }

}
