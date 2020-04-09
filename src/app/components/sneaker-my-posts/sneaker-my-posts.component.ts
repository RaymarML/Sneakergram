import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneaker-my-posts',
  templateUrl: './sneaker-my-posts.component.html',
  styleUrls: ['./sneaker-my-posts.component.scss']
})
export class SneakerMyPostsComponent implements OnInit {

  title: string = "Mis Publicaciones";
  constructor() { }

  ngOnInit(): void {
  }

}
