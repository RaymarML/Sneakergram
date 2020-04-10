import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {SneakerInterface} from "../model/SneakerInterface";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {fromPromise} from "rxjs/internal-compatibility";
import {AngularFireStorage} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  private sneakerCollection : AngularFirestoreCollection<SneakerInterface>;

  constructor(
    private angularFirestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.sneakerCollection = this.angularFirestore.collection<SneakerInterface>('sneaker');
  }

  getAllSneakers(): Observable<SneakerInterface[]> {
    return this.sneakerCollection.snapshotChanges().pipe(
      map(sneakers => {
        return sneakers.map(sneaker => {
          const content = sneaker.payload.doc.data() as SneakerInterface;
          const id = sneaker.payload.doc.id;
          return {id, ...content};
        });
      })
    )
  }

  getLastPosts(): Observable<SneakerInterface[]> {
    return this.sneakerCollection.snapshotChanges().pipe(
      map(sneakers => {
        return sneakers.map(sneaker => {
          const content = sneaker.payload.doc.data() as SneakerInterface;
          const id = sneaker.payload.doc.id;
          return {id, ...content};
        });
      })
    )
  }

  getFavorites(): Observable<SneakerInterface[]> {
    return this.sneakerCollection.snapshotChanges().pipe(
      map(sneakers => {
        return sneakers.map(sneaker => {
          const content = sneaker.payload.doc.data() as SneakerInterface;
          const id = sneaker.payload.doc.id;
          return {id, ...content};
        });
      })
    )
  }

  getSneaker(id:number): Observable<SneakerInterface> {
    return this.angularFirestore.doc<SneakerInterface>("sneaker/" + id).snapshotChanges().pipe(
      map(sneaker => {
        const content = sneaker.payload.data() as SneakerInterface;
        const id = sneaker.payload.id;
        return {id, ...content};
      })
    );
  }

  searchSneaker(search: string): Observable<any> {
    return this.angularFirestore.collection('sneaker',
        ref => ref.orderBy('name').startAt(search).endAt(search + "\uf8ff"))
      .snapshotChanges().pipe(
      map(sneakers => {
        return sneakers.map(sneaker => {
          const content = sneaker.payload.doc.data() as SneakerInterface;
          const id = sneaker.payload.doc.id;
          return {id, ...content};
        });
      }));
  }

  deleteSneaker(id: string): Observable<any>{
    return fromPromise(this.sneakerCollection.doc(id).delete());
  }

  createSneaker(sneaker: SneakerInterface){
    return fromPromise(this.sneakerCollection.add(sneaker));
  }

  getUserPosts(uid: string) {
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
}
