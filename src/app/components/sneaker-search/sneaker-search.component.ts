import { Component, OnInit } from '@angular/core';
import {SneakersService} from "../../services/sneakers.service";
import {fromEvent, Observable} from "rxjs";
import {SneakerInterface} from "../../model/SneakerInterface";
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from "rxjs/operators";
declare var $:any;

@Component({
  selector: 'app-sneaker-search',
  templateUrl: './sneaker-search.component.html',
  styleUrls: ['./sneaker-search.component.scss']
})
export class SneakerSearchComponent implements OnInit {

  searchSneakerObservable: Observable<SneakerInterface[]>;
  inputSearch: Observable<string>;

  constructor(
    private sneakersService: SneakersService
  ) {

  }

  ngOnInit(): void {
    this.searchSneakerObservable = this.inputSearch = fromEvent( $('#search'), 'keyup').pipe(
      map( (text: any) => text.target.value.toLocaleLowerCase() ),
      filter((search: string) => search.length > 0),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap( (search: string) => {
        return this.sneakersService.searchSneaker(search);
      })
    );
  }

}
