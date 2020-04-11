import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {SneakerInterface} from "../model/SneakerInterface";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {fromPromise} from "rxjs/internal-compatibility";
import {AuthorizationService} from "./authorization.service";

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

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

  getSneaker(id:string): Observable<SneakerInterface> {
    return this.sneakerCollection.doc(id).snapshotChanges().pipe(
      map(sneaker => {
        const content = sneaker.payload.data() as SneakerInterface;
        const id = sneaker.payload.id;
        return {id, ...content};
      })
    );
  }

  getLikes(id:string): Observable<any> {
    return this.sneakerCollection.doc(id).collection('likes'
    ).snapshotChanges();
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
    sneaker.uid = this.uid;
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
