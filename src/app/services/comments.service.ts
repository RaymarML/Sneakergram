import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {AuthorizationService} from "./authorization.service";
import {CommentInterface} from "../model/CommentInterface";
import {fromPromise} from "rxjs/internal-compatibility";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {SneakerInterface} from "../model/SneakerInterface";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private uid: string;
  private sneakerCollection: AngularFirestoreCollection<SneakerInterface>;

  constructor(

    private angularFirestore: AngularFirestore,
    private authorizationService: AuthorizationService,
  ) {
    this.sneakerCollection = this.angularFirestore.collection<SneakerInterface>('sneaker');
    this.authorizationService.currentUser.subscribe(value => {
      this.uid = value.uid;
    })
  }

  createComment(comment: CommentInterface, sneakerId: string){
    comment.uid = this.uid;
    return fromPromise(this.sneakerCollection.doc(sneakerId).collection('comments').add(comment));
  }

  getComments(sneakerId: string): Observable<CommentInterface[]>{
    return this.sneakerCollection.doc(sneakerId).collection('comments')
      .snapshotChanges().pipe(
        map(comments => {
          return comments.map(comment => {
            return comment.payload.doc.data() as CommentInterface;
          });
        }));
  }
}
