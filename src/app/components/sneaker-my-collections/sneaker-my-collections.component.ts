import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneaker-my-collections',
  templateUrl: './sneaker-my-collections.component.html',
  styleUrls: ['./sneaker-my-collections.component.scss']
})
export class SneakerMyCollectionsComponent implements OnInit {

  title: string = "Mis Colecciones"
  constructor() { }

  ngOnInit(): void {
  }

}
