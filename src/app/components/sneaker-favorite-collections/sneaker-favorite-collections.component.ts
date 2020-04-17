import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CollectionInterface} from "../../model/CollectionInterface";
import {SneakerCollectionService} from "../../services/sneaker-collection.service";

@Component({
  selector: 'app-sneaker-favorite-collections',
  templateUrl: './sneaker-favorite-collections.component.html',
  styleUrls: ['./sneaker-favorite-collections.component.scss']
})
export class SneakerFavoriteCollectionsComponent implements OnInit {
  title: string = "Colecciones favoritas";
  collectionsObservable: Observable<CollectionInterface[]>;

  constructor(
    private collectionService : SneakerCollectionService
  ) { }

  ngOnInit(): void {
    this.collectionsObservable = this.collectionService.getFavoritesCollection();
  }

}
