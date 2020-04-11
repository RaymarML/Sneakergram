import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentInterface} from "../../model/CommentInterface";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {

  @Output() closeFormEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  commentForm: FormGroup;
  @Input() sneakerUid: string;

  constructor(
    private commentsService: CommentsService
  ) {
    this.commentForm = new FormGroup({
      comment: new FormControl("", [Validators.required, Validators.maxLength(255)])
    })

  }

  ngOnInit(): void {
  }

  createComment(content){
    if (this.commentForm.valid){
      const comment: CommentInterface = {
        comment: content.comment,
        sneakerid: this.sneakerUid
      }
      this.commentsService.createComment(comment);
    }
    this.closeForm();
  }

  closeForm(){
    this.closeFormEmitter.emit(false);
  }

}
