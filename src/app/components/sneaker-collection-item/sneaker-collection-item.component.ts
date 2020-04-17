import {Component, Input, OnInit} from '@angular/core';
import {SneakersService} from "../../services/sneakers.service";
import {SneakerInterface} from "../../model/SneakerInterface";
import {SelectableBehaviourService} from "../../services/selectable-behaviour.service";

@Component({
  selector: 'app-sneaker-collecion-item',
  templateUrl: './sneaker-collection-item.component.html',
  styleUrls: ['./sneaker-collection-item.component.scss']
})
export class SneakerCollecionItemComponent implements OnInit {

  @Input() sneakerId: string;
  sneaker: SneakerInterface;

  constructor(
    private sneakerService: SneakersService,
    private selectableService : SelectableBehaviourService
  ) { }

  ngOnInit(): void {
    this.sneakerService.getSneaker(this.sneakerId).subscribe(
      (sneakerInterface : SneakerInterface) => {
        this.sneaker = sneakerInterface;
      }
    );
  }

  removeItemFromCollection(sneakerId){
    this.selectableService.deleteSneakerForCollection.next(sneakerId);
  }

}
