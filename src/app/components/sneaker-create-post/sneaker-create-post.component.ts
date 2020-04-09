import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneaker-create-post',
  templateUrl: './sneaker-create-post.component.html',
  styleUrls: ['./sneaker-create-post.component.scss']
})
export class SneakerCreatePostComponent implements OnInit {

  title: string = "Crear publicaciones";
  numberOfLinksAvailable: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  addLink(): void {
    if(this.numberOfLinksAvailable > 0){
      this.numberOfLinksAvailable++;
    }
  }
}
