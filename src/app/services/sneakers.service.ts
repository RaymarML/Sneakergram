import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {SneakerInterface} from "../model/SneakerInterface";
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from "@angular/fire/firestore";
import {fromPromise} from "rxjs/internal-compatibility";
import {AuthorizationService} from "./authorization.service";

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  private sneakerCollection : AngularFirestoreCollection<SneakerInterface>;
  private uid: string;
  private map = map((sneakers: DocumentChangeAction<unknown>[]) => {
    return sneakers.map( (sneaker:DocumentChangeAction<unknown>) => {
      const content = sneaker.payload.doc.data() as SneakerInterface;
      const id = sneaker.payload.doc.id;
      return {id, ...content};
    });
  });

  constructor(
    private angularFirestore: AngularFirestore,
    private authorizationService: AuthorizationService,
  ) {
    this.sneakerCollection = this.angularFirestore.collection<SneakerInterface>('sneaker');
    this.uid = this.authorizationService.getUid();
  }

  getMostPopular(): Observable<SneakerInterface[]> {
    return this.angularFirestore
      .collection('sneaker',
          ref => ref.orderBy('created_at', 'desc').limit(8))
      .snapshotChanges().pipe(this.map);
  }

  getLastPosts(limit: number = 100): Observable<SneakerInterface[]> {
    return this.angularFirestore
      .collection('sneaker', ref => ref.orderBy('created_at', 'desc').limit(limit))
      .snapshotChanges().pipe(this.map);
  }

  getFavorites(): Observable<SneakerInterface[]> {
    return this.angularFirestore.collection('sneaker', ref => {
      return ref.where('likes', 'array-contains', this.authorizationService.getUid())
    }).snapshotChanges().pipe(this.map);
  }

  getSneaker(id:string): Observable<SneakerInterface> {
    return this.sneakerCollection.doc(id).snapshotChanges().pipe(
      map(sneaker => {
        const content = sneaker.payload.data() as SneakerInterface;
        const id = sneaker.payload.id;
        return {id, ...content};
      })
    );
  }

  searchSneaker(search: string): Observable<SneakerInterface[]> {
    return this.angularFirestore.collection('sneaker',
        ref => ref.orderBy('name').startAt(search).endAt(search + "\uf8ff"))
      .snapshotChanges().pipe(this.map);
  }

  deleteSneaker(id: string): Observable<any>{
    return fromPromise(this.sneakerCollection.doc(id).delete());
  }

  createSneaker(sneaker: SneakerInterface){
    sneaker.uid = this.uid;
    return fromPromise(this.sneakerCollection.add(sneaker));
  }

  getUserPosts(uid: string): Observable<SneakerInterface[]> {
    return this.angularFirestore.collection('sneaker',
      ref => ref.orderBy('name').where("uid", "==", uid))
      .snapshotChanges().pipe(
        map(sneakers => {
          return sneakers.map(sneaker => {
            const content = sneaker.payload.doc.data() as SneakerInterface;
            const id = sneaker.payload.doc.id;
            return {id, ...content};
          });
        }));
  }

  updateSneaker(sneaker: SneakerInterface): Observable<any> {
    return fromPromise(this.sneakerCollection.doc(sneaker.id).set(sneaker));
  }

  updateLike(sneaker_id: string, likes: string[] ){
    return fromPromise(this.sneakerCollection.doc(sneaker_id).update({likes: likes}));
  }
}
