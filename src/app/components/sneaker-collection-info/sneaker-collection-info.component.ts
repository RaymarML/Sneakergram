import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SneakerCollectionService} from "../../services/sneaker-collection.service";
import {CollectionInterface} from "../../model/CollectionInterface";
import {SneakerInterface} from "../../model/SneakerInterface";
import {SneakersService} from "../../services/sneakers.service";
import {AuthorizationService} from "../../services/authorization.service";
import {User} from "firebase";

@Component({
  selector: 'app-sneaker-collection-info',
  templateUrl: './sneaker-collection-info.component.html',
  styleUrls: ['./sneaker-collection-info.component.scss']
})
export class SneakerCollectionInfoComponent implements OnInit {

  title:string = "";
  sneakers : SneakerInterface[] = [];
  collection: CollectionInterface;
  userLog : User;
  like: boolean;

  constructor(
    private activatedRoute : ActivatedRoute,
    private collectionServive : SneakerCollectionService,
    private sneakerService : SneakersService,
    private authService : AuthorizationService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.collectionServive.getCollection(params['id']).subscribe((collection: CollectionInterface) => {
        this.sneakers = [];
        this.title = `Sneakers de ${collection.name}`;
        this.collection = collection;
        this.isCollectionLiked();
        for (let i = 0; i < collection.sneakers.length; i++){
          this.sneakerService.getSneaker(collection.sneakers[i]).subscribe(
            (sneaker: SneakerInterface) => {
              this.sneakers.push(sneaker);
            }
          );
        }
        });
    });

    this.authService.currentUser.subscribe(value => {
      this.userLog = value;
      this.isCollectionLiked();
    });
  }

  private isCollectionLiked(){
    if (this.userLog != null){
      this.like = this.collection.likes.includes(this.userLog.uid);
    }
  }

  toggleLikeInCollection() {
    if(this.like){
      this.collection.likes = this.collection.likes.filter( value => value != this.userLog.uid );
    } else {
      this.collection.likes.push(this.userLog.uid);
    }
    this.like = !this.like;
    this.collectionServive.updateLikes(this.collection.id, this.collection.likes);
  }
}
