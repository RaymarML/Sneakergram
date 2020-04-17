import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CollectionInterface} from "../../model/CollectionInterface";
import {SneakerCollectionService} from "../../services/sneaker-collection.service";

@Component({
  selector: 'app-sneaker-last-collections',
  templateUrl: './sneaker-last-collections.component.html',
  styleUrls: ['./sneaker-last-collections.component.scss']
})
export class SneakerLastCollectionsComponent implements OnInit {

  collectionsObservable: Observable<CollectionInterface[]>;
  title: string = "Colecciones";
  collectionActions:boolean = false;
  constructor(
    private collectionService: SneakerCollectionService,
  ) { }

  ngOnInit(): void {
    this.collectionsObservable = this.collectionService.getCollections()
  }

}
