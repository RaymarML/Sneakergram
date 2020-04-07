import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {SneakerInterface} from "../model/SneakerInterface";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  constructor(
    private angularFirestore: AngularFirestore
  ) {
  }

  getAllSneakers(): Observable<SneakerInterface[]> {
    return this.angularFirestore.collection('sneaker').snapshotChanges().pipe(
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
    return this.angularFirestore.collection('sneaker').snapshotChanges().pipe(
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
    return this.angularFirestore.collection('sneaker').snapshotChanges().pipe(
      map(sneakers => {
        return sneakers.map(sneaker => {
          const content = sneaker.payload.doc.data() as SneakerInterface;
          const id = sneaker.payload.doc.id;
          return {id, ...content};
        });
      })
    )
  }

  getSneaker(id:number): Observable<any> {
    return this.angularFirestore.doc<SneakerInterface>("sneaker/" + id).snapshotChanges().pipe(
      map(sneaker => {
        const content = sneaker.payload.data() as SneakerInterface;
        const id = sneaker.payload.id;
        return {id, ...content};
      })
    );
  }
}
