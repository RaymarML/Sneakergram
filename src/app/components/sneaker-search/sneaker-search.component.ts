import { Component, OnInit } from '@angular/core';
import {SneakersService} from "../../services/sneakers.service";
import {fromEvent, Observable} from "rxjs";
import {SneakerInterface} from "../../model/SneakerInterface";
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {SelectableBehaviourService} from "../../services/selectable-behaviour.service";
import {Location} from "@angular/common";
declare var $:any;

@Component({
  selector: 'app-sneaker-search',
  templateUrl: './sneaker-search.component.html',
  styleUrls: ['./sneaker-search.component.scss']
})
export class SneakerSearchComponent implements OnInit {

  selectOption: boolean = false;
  searchSneakerObservable: Observable<SneakerInterface[]>;
  selectedSneakers: string[] = [];

  constructor(
    private sneakersService: SneakersService,
    private selectableBehaviour : SelectableBehaviourService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.selectOption = params['selectOption'].match('true');
    });

    this.selectedSneakers = this.selectableBehaviour.selectSneakerForCollection.getValue().concat(this.selectedSneakers);
    this.selectableBehaviour.selectSneakerInSearch.next(this.selectedSneakers);

    this.searchSneakerObservable = fromEvent( $('#search'), 'keyup').pipe(
      map( (text: any) => text.target.value.toLocaleLowerCase() ),
      filter((search: string) => search.length > 0),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap( (search: string) => {
        return this.sneakersService.searchSneaker(search);
      })
    );
    this.selectableBehaviour.selectSneakerInSearch.subscribe(
      (data: any) => {
        if(data.sneakerAdd){
          this.selectedSneakers.push(data.sneakerId);
        }else{
          const index = this.selectedSneakers.indexOf(data.sneakerId, 0);
          if (index > -1) {
            this.selectedSneakers.splice(index, 1);
          }
        }
      }
    );
  }

  sendToCollection(){
    this.selectableBehaviour.selectSneakerForCollection.next(this.selectedSneakers);
    this.location.back();
  }

}

