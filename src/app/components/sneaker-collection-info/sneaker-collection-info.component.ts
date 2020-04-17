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

  title:string = "Sneakers de ";
  sneakers : SneakerInterface[] = [];
  collectionId : string = "";
  userLog : User;

  constructor(
    private activatedRoute : ActivatedRoute,
    private collectionServive : SneakerCollectionService,
    private sneakerService : SneakersService,
    private authService : AuthorizationService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.collectionServive.getCollection(params['id']).subscribe(
        (collection: CollectionInterface) => {
          this.collectionId = params['id'];
          this.title += collection.name;
          for (let i = 0; i < collection.sneakers.length; i++){
            this.sneakerService.getSneaker(collection.sneakers[i]).subscribe(
              (sneaker: SneakerInterface) => {
                this.sneakers.push(sneaker);
              }
            );
          }
        });
    });
  }

  toggleLikeInCollection() {

  }
}
