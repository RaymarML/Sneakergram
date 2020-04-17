import { Component, Input, OnInit } from '@angular/core';
import {CollectionInterface} from "../../model/CollectionInterface";
import {SneakerInterface} from "../../model/SneakerInterface";
import {SneakersService} from "../../services/sneakers.service";
import {SneakerCollectionService} from "../../services/sneaker-collection.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sneaker-collection',
  templateUrl: './sneaker-collection.component.html',
  styleUrls: ['./sneaker-collection.component.scss']
})
export class SneakerCollectionComponent implements OnInit {

  @Input() collection: CollectionInterface;
  @Input() collectionActions : boolean;
  sneakersImgs: string[] = [];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true,
    "fade": true,
    "mobileFirst": true
  };

  constructor(
    private sneakerService : SneakersService,
    private collectionService : SneakerCollectionService,
    private route : Router,
  ) {

  }

  ngOnInit(): void {

    for(let i = 0; i < this.collection.sneakers.length; i++) {
      this.sneakerService.getSneaker(this.collection.sneakers[i]).subscribe(
        (sneaker: SneakerInterface) => {
          this.sneakersImgs.push(sneaker.imageUrl[0]);
        }
      );
    }
  }

  deleteCollection(): void{
    Swal.fire({
      title:'¿Seguro que quieres eliminar este sneaker?',
      text:'No será posible recuperarla',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF214E',
      confirmButtonText:'Borrar',
      cancelButtonColor: '#FF214E',
    }).then(result => {
      if(result.value){
        this.collectionService.deleteCollection(this.collection.id);
        Swal.fire('Borrado')
      }
    })

  }

  showCollection(): void{
    if(!this.collectionActions){
      this.route.navigate(['CollectionInfo/', this.collection.id]);
    }
  }

  editCollection() : void {
    this.route.navigate(['Content/My-Collections/Edit-Collection', this.collection.id]);
  }
}
