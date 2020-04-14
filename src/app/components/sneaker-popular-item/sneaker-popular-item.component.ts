import {Component, Input, OnInit} from '@angular/core';
import {SneakerInterface} from "../../model/SneakerInterface";

@Component({
  selector: 'app-sneaker-popular-item',
  templateUrl: './sneaker-popular-item.component.html',
  styleUrls: ['./sneaker-popular-item.component.scss']
})
export class SneakerPopularItemComponent implements OnInit {

  @Input() sneaker: SneakerInterface;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
