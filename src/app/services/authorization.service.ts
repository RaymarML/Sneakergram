import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {auth} from "firebase";
import {fromPromise} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) {

    this.angularFireAuth.authState.subscribe(
      value => {
        console.log(value.providerData[0]);
        console.log(value);
      },

      error => console.log(error),
    );

    //this.angularFireAuth.signInWithEmailAndPassword("prueba@gmail.com", "prueba");
    //this.angularFireAuth.signOut();

  }

  click(){
    let provider = new auth.GoogleAuthProvider();

    fromPromise(this.angularFireAuth.signInWithRedirect(provider)).subscribe(
      value => console.log(value),
        reason => console.log(reason)
    );
  }

  sigInWithEmailAndPassword(email: string, password: string) {
    fromPromise(this.angularFireAuth.signInWithEmailAndPassword("prueba@gmail.com", "prueba")).subscribe(
      value => {
        console.log(value);
      }, error => {
        console.log(error);
      }
    );
  }

  signOut(){
    fromPromise(this.angularFireAuth.signOut()).subscribe(
      value => console.log(value),
      error => console.log(error)
    );
  }
}
