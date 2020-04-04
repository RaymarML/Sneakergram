import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SneakerHeaderComponent } from './sneaker-header/sneaker-header.component';
import { SneakerButtonComponent } from './sneaker-button/sneaker-button.component';
import { SneakerRegistrationComponent } from './sneaker-registration/sneaker-registration.component';
import { SneakerLoginComponent } from './sneaker-login/sneaker-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {RouterModule} from '@angular/router';
import {SneakerMainComponent} from './sneaker-main/sneaker-main.component';
import { SneakerLandingComponent } from './sneaker-landing/sneaker-landing.component';
import { SneakerSideMenuComponent } from './sneaker-side-menu/sneaker-side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SneakerHeaderComponent,
    SneakerButtonComponent,
    SneakerRegistrationComponent,
    SneakerLoginComponent,
    UserProfileComponent,
    SneakerMainComponent,
    SneakerLandingComponent,
    SneakerSideMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: SneakerLandingComponent, children: [
          {path: '', component: SneakerMainComponent},
          {path: 'Access/Login', component: SneakerLoginComponent },
          {path: 'Access/Registration', component: SneakerRegistrationComponent },
        ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
