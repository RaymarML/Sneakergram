import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sneaker-page-presentation',
  templateUrl: './sneaker-page-presentation.component.html',
  styleUrls: ['./sneaker-page-presentation.component.scss']
})
export class SneakerPagePresentationComponent implements OnInit {

  constructor() { }

  @Input() title:string;
  ngOnInit(): void {

  }
}
