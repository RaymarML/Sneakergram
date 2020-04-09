
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sneaker-create-collection',
  templateUrl: './sneaker-create-collection.component.html',
  styleUrls: ['./sneaker-create-collection.component.scss']
})
export class SneakerCreateCollectionComponent implements OnInit {

  title: string = "Crear colección";
  numberOfPostToAdd: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  addPost(): void {
    let lastPostIndex = this.numberOfPostToAdd;
    this.numberOfPostToAdd++;
    $("#post" + lastPostIndex).after(
      "<div id=\"post" + this.numberOfPostToAdd + "\" class=\"row mt-2\">\n" +
      "      <input class=\"col-12 font-size-16 py-3\" type=\"email\" placeholder=\"Elige un post\">\n" +
      "    </div>"
    );
  }
}
