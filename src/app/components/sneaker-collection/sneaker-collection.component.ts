import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneaker-collection',
  templateUrl: './sneaker-collection.component.html',
  styleUrls: ['./sneaker-collection.component.scss']
})
export class SneakerCollectionComponent implements OnInit {

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true,
    "fade": true,
    "mobileFirst": true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
