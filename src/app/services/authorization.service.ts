import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {fromPromise} from "rxjs/internal-compatibility";
import {UserInterface} from "../model/UserInterface";
import {Observable} from "rxjs";
import { User } from "firebase";


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  currentUser: Observable<User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) {
    this.currentUser = this.angularFireAuth.authState;
  }

  sigInWithEmailAndPassword(user: UserInterface) {
    const {email, password} = user;
    return fromPromise(this.angularFireAuth.signInWithEmailAndPassword(email, password));
  }

  sigInWithGoogle(){
    //TODO
  }

  signOut(){
    this.angularFireAuth.signOut();
  }


}
