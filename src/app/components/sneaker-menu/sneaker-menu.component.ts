import {Component, Input, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {User} from "firebase";
import {SneakersService} from "../../services/sneakers.service";
import {LikeInterface} from "../../model/LikeInterface";

@Component({
  selector: 'app-sneaker-menu',
  templateUrl: './sneaker-menu.component.html',
  styleUrls: ['./sneaker-menu.component.scss']
})
export class SneakerMenuComponent implements OnInit {

  @Input() shopUrl: string;
  @Input() sneakerId: string;
  userlog: User;
  like: LikeInterface;


  constructor(
    private authorizationService: AuthorizationService,
    private sneakersService: SneakersService
  ) { }

  ngOnInit(): void {
    this.authorizationService.currentUser.subscribe(value => {
      this.userlog = value;

      this.sneakersService.getUserLike(this.sneakerId, this.userlog.uid).subscribe(like => {
        this.like = like[0]
      })
    });
  }

  toggleLike() {
    if (this.like){
      this.sneakersService.deleteLike(this.sneakerId, this.like.id).subscribe()
    }else {
      const likeCreated: LikeInterface = {
        uid: this.userlog.uid
      }
      this.sneakersService.addLike(this.sneakerId, likeCreated).subscribe(() => {})
    }

  }


}
