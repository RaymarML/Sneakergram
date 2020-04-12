import { Component, OnInit } from '@angular/core';
import {SneakersService} from "../../services/sneakers.service";
import {AuthorizationService} from "../../services/authorization.service";
import {Observable} from "rxjs";
import {SneakerInterface} from "../../model/SneakerInterface";

@Component({
  selector: 'app-sneaker-my-posts',
  templateUrl: './sneaker-my-posts.component.html',
  styleUrls: ['./sneaker-my-posts.component.scss']
})
export class SneakerMyPostsComponent implements OnInit {

  sneakerObservable: Observable<SneakerInterface[]>;
  title: string = "Mis Publicaciones";

  constructor(
    private sneakersService: SneakersService,
    private authorizationService: AuthorizationService
  ) {

  }

  ngOnInit(): void {
    this.sneakerObservable = this.sneakersService.getUserPosts(this.authorizationService.getUid());
  }

}
