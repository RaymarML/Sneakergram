import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sneaker-page-content',
  templateUrl: './sneaker-content-page.component.html',
  styleUrls: ['./sneaker-content-page.component.scss']
})
export class SneakerContentPageComponent implements OnInit {

  header:string;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.header = params['header'];
    })
  }
}
