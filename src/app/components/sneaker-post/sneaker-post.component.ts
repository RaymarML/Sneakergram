import { Component, OnInit } from '@angular/core';
import {SneakersService} from "../../services/sneakers.service";
import {Observable} from "rxjs";
import {SneakerInterface} from "../../model/SneakerInterface";

@Component({
  selector: 'app-sneaker-post',
  templateUrl: './sneaker-post.component.html',
  styleUrls: ['./sneaker-post.component.scss']
})
export class SneakerPostComponent implements OnInit {

  title: string = "Últimos Posts";
  sneakerObservable: Observable<SneakerInterface[]>;

  constructor(
    private sneakersService: SneakersService
  ) {
  }

  ngOnInit(): void {
    this.sneakerObservable = this.sneakersService.getLastPosts();
  }

}
