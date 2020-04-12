import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {fromPromise} from "rxjs/internal-compatibility";
import {UserInterface} from "../model/UserInterface";
import {BehaviorSubject, Observable} from "rxjs";
import { User, auth } from "firebase";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private currentUserSource: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) {
    this.currentUserSource = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))
    this.currentUser = this.currentUserSource.asObservable();

    this.angularFireAuth.authState.subscribe(value => {
      this.currentUserSource.next(value);
      localStorage.setItem('user', JSON.stringify(value));
    });

  }

  sigInWithEmailAndPassword(user: UserInterface) {
    const {email, password} = user;
    return fromPromise(this.angularFireAuth.signInWithEmailAndPassword(email, password));
  }

  sigInWithGoogle(){
    const provider = new auth.GoogleAuthProvider();
    return fromPromise(this.angularFireAuth.signInWithRedirect(provider));
  }

  signOut(){
    this.angularFireAuth.signOut();
  }

  isLog(): boolean {
    return this.currentUserSource.value != null;
  }

  getUid(): string {
    return (this.isLog())?this.currentUserSource.value.uid:'';
  }
}
