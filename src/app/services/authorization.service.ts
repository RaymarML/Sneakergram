import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {fromPromise} from "rxjs/internal-compatibility";
import {UserInterface} from "../model/UserInterface";
import {Observable} from "rxjs";
import { User, auth } from "firebase";


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  currentUser: Observable<User>;
  uid: string

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) {
    this.currentUser = this.angularFireAuth.authState;
    this.currentUser.subscribe( value => {
      this.uid = value.uid;
    })
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
}
