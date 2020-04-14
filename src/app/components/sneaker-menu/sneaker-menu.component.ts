import {Component, Input, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {User} from "firebase";
import {SneakerInterface} from "../../model/SneakerInterface";
import {SneakersService} from "../../services/sneakers.service";

@Component({
  selector: 'app-sneaker-menu',
  templateUrl: './sneaker-menu.component.html',
  styleUrls: ['./sneaker-menu.component.scss']
})
export class SneakerMenuComponent implements OnInit {

  @Input() shopUrl: string;
  @Input() sneaker: SneakerInterface;
  userlog: User;
  like: boolean;

  constructor(
    private authorizationService: AuthorizationService,
    private sneakersService: SneakersService
  ) { }

  ngOnInit(): void {
    this.authorizationService.currentUser.subscribe(value => {
      this.userlog = value;

      if (this.userlog != null){
        this.like = this.sneaker.likes.includes(this.userlog.uid);
      }
    });

  }

  toggleLike() {
    if(this.like){
      this.sneaker.likes = this.sneaker.likes.filter( value => value != this.userlog.uid );
    } else {
      this.sneaker.likes.push(this.userlog.uid);
    }
    this.like = !this.like;
    this.sneakersService.updateLike(this.sneaker.id, this.sneaker.likes);
  }
}
