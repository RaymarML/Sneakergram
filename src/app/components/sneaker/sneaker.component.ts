import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SneakersService } from "../../services/sneakers.service";
import {SneakerInterface} from "../../model/SneakerInterface";
import {AuthorizationService} from "../../services/authorization.service";
import {Observable} from "rxjs";
import {CommentsService} from "../../services/comments.service";
import {CommentInterface} from "../../model/CommentInterface";

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.scss']
})
export class SneakerComponent implements OnInit {

  sneaker: SneakerInterface;
  commentsObservable: Observable<CommentInterface[]>;

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true,
    "fade": true,
    "mobileFirst": true
  };

  isLog: boolean;
  showForm: boolean = false;

  constructor(
    private authorizationService: AuthorizationService,
    private sneakersService: SneakersService,
    private commentsService: CommentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sneakersService.getSneaker(params['id']).subscribe(
        value => {
          this.sneaker = value;
        },
        error => {
          this.router.navigate([''])
        }
      );

      this.commentsObservable = this.commentsService.getComments(params['id'])
    })

    this.authorizationService.currentUser.subscribe(value => {
      this.isLog = value != null;
    });
  }

  manageForm(form: boolean) {
    this.showForm = form;
  }
}
