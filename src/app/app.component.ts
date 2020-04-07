import { Component } from '@angular/core';
import {AuthorizationService} from "./services/authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sneakergram';

  constructor(
    private authenticationService: AuthorizationService
  ) {

  }

  click(){
    this.authenticationService.click();
  }

  click2() {
    this.authenticationService.signOut();
  }

  click3() {
    this.authenticationService.sigInWithEmailAndPassword("prueba@gmail.com", "prueba");
  }
}
