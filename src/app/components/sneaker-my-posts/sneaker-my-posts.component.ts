import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneaker-my-posts',
  templateUrl: './sneaker-my-posts.component.html',
  styleUrls: ['./sneaker-my-posts.component.css']
})
export class SneakerMyPostsComponent implements OnInit {

  title: string = "Mis Posts";
  constructor() { }

  ngOnInit(): void {
  }

}
