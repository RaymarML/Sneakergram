import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {SneakerCollectionService} from "../../services/sneaker-collection.service";
import {Observable} from "rxjs";
import {CollectionInterface} from "../../model/CollectionInterface";
import {SelectableBehaviourService} from "../../services/selectable-behaviour.service";

@Component({
  selector: 'app-sneaker-my-collections',
  templateUrl: './sneaker-my-collections.component.html',
  styleUrls: ['./sneaker-my-collections.component.scss']
})
export class SneakerMyCollectionsComponent implements OnInit {

  sneakerCollectionObservable: Observable<CollectionInterface[]>
  title: string = "Mis Colecciones"
  collectionActions: boolean = true;

  constructor
  (
    private sneakersCollectionService: SneakerCollectionService,
    private authorizationService: AuthorizationService,
    private selctableBehaviour : SelectableBehaviourService
  )
  { }

  ngOnInit(): void {
    this.sneakerCollectionObservable = this.sneakersCollectionService.getUserCollections(this.authorizationService.getUid());
  }

}
