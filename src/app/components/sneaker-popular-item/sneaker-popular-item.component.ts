import {Component, Input, OnInit} from '@angular/core';
import {SneakerInterface} from "../../model/SneakerInterface";
import {LikesService} from "../../services/likes.service";

@Component({
  selector: 'app-sneaker-popular-item',
  templateUrl: './sneaker-popular-item.component.html',
  styleUrls: ['./sneaker-popular-item.component.scss']
})
export class SneakerPopularItemComponent implements OnInit {

  @Input() sneaker: SneakerInterface;
  likes: number;

  constructor(
    private likesService: LikesService
  ) { }

  ngOnInit(): void {
    this.likesService.getLikes(this.sneaker.id).subscribe(value => this.likes = value.length)
  }

}
