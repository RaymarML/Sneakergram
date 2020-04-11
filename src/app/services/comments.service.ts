import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {AuthorizationService} from "./authorization.service";
import {CommentInterface} from "../model/CommentInterface";
import {fromPromise} from "rxjs/internal-compatibility";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private uid: string;
  private commentCollection: AngularFirestoreCollection<CommentInterface>;

  constructor(

    private angularFirestore: AngularFirestore,
    private authorizationService: AuthorizationService,
  ) {
    this.commentCollection = this.angularFirestore.collection<CommentInterface>('comment');
    this.authorizationService.currentUser.subscribe(value => {
      this.uid = value.uid;
    })
  }

  createComment(comment: CommentInterface){
    comment.uid = this.uid;
    return fromPromise(this.commentCollection.add(comment));
  }

  getComments(sneakerId: string): Observable<CommentInterface[]>{
    return this.angularFirestore.collection('comment',
      ref => ref.where("sneakerid", "==", sneakerId))
      .snapshotChanges().pipe(
        map(comments => {
          return comments.map(comment => {
            return comment.payload.doc.data() as CommentInterface;
          });
        }));
  }
}
