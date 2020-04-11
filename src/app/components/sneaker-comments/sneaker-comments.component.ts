import {Component, Input, OnInit} from '@angular/core';
import {CommentInterface} from "../../model/CommentInterface";

@Component({
  selector: 'app-sneaker-comments',
  host: {'class': 'col-12 col-md-4 mb-2'},
  templateUrl: './sneaker-comments.component.html',
  styleUrls: ['./sneaker-comments.component.scss']
})
export class SneakerCommentsComponent implements OnInit {

  @Input() comment: CommentInterface;

  constructor(
  ) {}

  ngOnInit(): void {

  }

}
