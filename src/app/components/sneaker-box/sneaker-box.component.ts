import {Component, Input, OnInit} from '@angular/core';
import {Sneaker} from "../../model/Sneaker";

@Component({
  selector: 'app-sneaker-box',
  host: {'class': 'col-6 col-md-4 mb-2'},
  templateUrl: './sneaker-box.component.html',
  styleUrls: ['./sneaker-box.component.scss']
})
export class SneakerBoxComponent implements OnInit {

  @Input() sneaker: Sneaker;

  constructor() { }

  ngOnInit(): void {
  }

}
