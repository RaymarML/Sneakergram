import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {LikeInterface} from "../model/LikeInterface";
import {map} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {SneakerInterface} from "../model/SneakerInterface";
import {AuthorizationService} from "./authorization.service";

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private sneakerCollection : AngularFirestoreCollection<SneakerInterface>;
  private uid: string;

  constructor(
    private angularFirestore: AngularFirestore,
    private authorizationService: AuthorizationService,
  ) {
    this.sneakerCollection = this.angularFirestore.collection<SneakerInterface>('sneaker');
    this.authorizationService.currentUser.subscribe(value => {
      this.uid = value.uid;
    })
  }

  getLikes(id:string): Observable<LikeInterface[]> {
    return this.sneakerCollection.doc(id).collection('likes'
    ).snapshotChanges().pipe(
      map(likes => {
        return likes.map(like => {
          const id = like.payload.doc.id;
          return {id, ...like.payload.doc.data() as LikeInterface};
        })
      })
    );
  }

  getUserLike(id:string, uid:string): Observable<LikeInterface[]> {
    return this.sneakerCollection.doc(id).collection('likes',
      ref => ref.where('uid', '==', uid))
      .snapshotChanges().pipe(
        map(likes => {
          return likes.map(like => {
            const id = like.payload.doc.id;
            return {id, ...like.payload.doc.data() as LikeInterface};
          })
        })
      );
  }

  addLike(id: string, like:LikeInterface): Observable<any> {
    return fromPromise(this.sneakerCollection.doc(id).collection('likes').add(like));
  }

  deleteLike(id:string, likeId:string):Observable<any> {
    return fromPromise(this.sneakerCollection.doc(id).collection('likes').doc(likeId).delete());
  }
}
