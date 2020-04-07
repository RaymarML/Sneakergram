import {Component, Input, OnInit} from '@angular/core';
import {Sneaker} from "../../model/Sneaker";
import {Observable} from "rxjs";
import {SneakerInterface} from "../../model/SneakerInterface";

@Component({
  selector: 'app-sneaker-page-content',
  templateUrl: './sneaker-content-page.component.html',
  styleUrls: ['./sneaker-content-page.component.scss']
})
export class SneakerContentPageComponent implements OnInit {

  @Input() sneakerObservable: Observable<SneakerInterface[]>;
  @Input() title:string;
  sneakers: SneakerInterface[];

  constructor(
  ) { }

  ngOnInit(): void {
    this.sneakerObservable.subscribe(
      response => {
        this.sneakers = response;
      },
      error => {
        this.sneakers = [];
      })
  }

}
