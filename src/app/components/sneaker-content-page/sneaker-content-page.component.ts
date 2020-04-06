import {Component, Input, OnInit} from '@angular/core';
import {Sneaker} from "../../model/Sneaker";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sneaker-page-content',
  templateUrl: './sneaker-content-page.component.html',
  styleUrls: ['./sneaker-content-page.component.scss']
})
export class SneakerContentPageComponent implements OnInit {

  @Input() sneakerObservable: Observable<Array<Sneaker>>;
  @Input() title:string;
  sneakers: Array<Sneaker>;

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
