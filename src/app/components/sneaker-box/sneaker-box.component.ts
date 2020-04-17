import {Component, Input, OnInit} from '@angular/core';
import {SneakerInterface} from "../../model/SneakerInterface";
import {Router} from "@angular/router";
import {SelectableBehaviourService} from "../../services/selectable-behaviour.service";
declare var $:any;

@Component({
  selector: 'app-sneaker-box',
  host: {'class': 'col-6 col-md-4 mb-2'},
  templateUrl: './sneaker-box.component.html',
  styleUrls: ['./sneaker-box.component.scss']
})
export class SneakerBoxComponent implements OnInit {

  @Input() sneaker: SneakerInterface;
  @Input() selectable: boolean = false;
  selectedCurrent : boolean;

  constructor(
    private router: Router,
    private selectableBehavior : SelectableBehaviourService
  ) { }

  ngOnInit(): void {
    if(this.selectable){
      this.selectableBehavior.selectSneakerForCollection.subscribe(
        (sneakersIds : string[]) => {
          this.selectedCurrent = sneakersIds.includes(this.sneaker.id);
        }
      );
    }

  }

  sneakerAction(): void{
    if(!this.selectable){
      this.router.navigate(['/Sneaker', this.sneaker.id])
    }else{
      let seletedSneaker = $("#" + this.sneaker.id);
      if(!seletedSneaker.hasClass("selected-sneaker")){
        seletedSneaker.addClass("selected-sneaker");
        this.selectableBehavior.selectSneakerInSearch.next({sneakerId : this.sneaker.id, sneakerAdd: true});
      }else{
        seletedSneaker.removeClass("selected-sneaker");
        this.selectableBehavior.selectSneakerInSearch.next({sneakerId : this.sneaker.id, sneakerAdd: false});
      }
    }
  }
}
