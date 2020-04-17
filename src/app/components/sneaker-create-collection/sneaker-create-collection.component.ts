import { Component, OnInit } from '@angular/core';
import {SelectableBehaviourService} from "../../services/selectable-behaviour.service";
import {CollectionInterface} from "../../model/CollectionInterface";
import {SneakerCollectionService} from "../../services/sneaker-collection.service";
import {SneakerInterface} from "../../model/SneakerInterface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
declare var $:any;

@Component({
  selector: 'app-sneaker-create-collection',
  templateUrl: './sneaker-create-collection.component.html',
  styleUrls: ['./sneaker-create-collection.component.scss']
})
export class SneakerCreateCollectionComponent implements OnInit {

  title: string = "Crear colección";
  collectionForm: FormGroup;
  sneakersIds: string[] = [];
  sneaker: SneakerInterface;
  private sneakerCollection: CollectionInterface;

  constructor(
    private sneakerCollectionService : SneakerCollectionService,
    private selectableBehaviour : SelectableBehaviourService,
    private router: Router
  ) {
    this.collectionForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.maxLength(60)])
    });
  }

  ngOnInit(): void {
    this.sneakersIds = [];
    this.sneakersIds = this.selectableBehaviour.selectSneakerForCollection.getValue();
    this.selectableBehaviour.deleteSneakerForCollection.subscribe(
      (sneakerId: string) => {
        $("#" + sneakerId).remove();
        const index = this.sneakersIds.indexOf(sneakerId, 0);
        if (index > -1) {
          this.sneakersIds.splice(index, 1);
        }
      }
    );
  }



  addCollection(collectionForm: FormGroup): void {
    if (this.collectionForm.valid) {
      const {name} = this.collectionForm.value
      if(this.sneakersIds.length >= 2){

        this.sneakerCollection = {
          "name": name,
          "uid": '',
          "sneakers": this.sneakersIds,
          "created_at": Date.now(),
          likes: []
        }
        this.sneakerCollectionService.createSneakerCollection(this.sneakerCollection).subscribe(
          value => {
            this.router.navigate(["Content/My-Collections/"])
          }
        );
      }else{
        $("#nameInput").after(
          "<p class='col-12'>La colleción debe de tener al menos 2 sneakers</p>"
        );
      }
    }else{
      $("#nameInput").after(
        "<p class='col-12'>Este campo esta vacío</p>"
      );
    }
  }

  searchSneakersForCollection() : void{
    this.selectableBehaviour.selectSneakerForCollection.next(this.sneakersIds);
    this.router.navigate(['/Content/Search', true]);
  }
}
