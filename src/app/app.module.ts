import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SneakerHeaderComponent } from './components/sneaker-header/sneaker-header.component';
import { SneakerRegistrationComponent } from './components/sneaker-registration/sneaker-registration.component';
import { SneakerLoginComponent } from './components/sneaker-login/sneaker-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {RouterModule} from '@angular/router';
import {SneakerMainComponent} from './components/sneaker-main/sneaker-main.component';
import { SneakerLandingComponent } from './components/sneaker-landing/sneaker-landing.component';
import { SneakerSideMenuComponent } from './components/sneaker-side-menu/sneaker-side-menu.component';
import {AppRouting} from "./app-routing/app-routing";
import { SneakerContentPageComponent } from './components/sneaker-content-page/sneaker-content-page.component';
import { SneakerBoxComponent } from './components/sneaker-box/sneaker-box.component';
import { SneakerPostComponent } from './components/sneaker-post/sneaker-post.component';
import { SneakerFavoritesComponent } from './components/sneaker-favorites/sneaker-favorites.component';
import { SneakerComponent } from './components/sneaker/sneaker.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorageModule, BUCKET} from "@angular/fire/storage";
import { environment } from '../environments/environment';
import { LoadingComponent } from './components/loading/loading.component';

import { ReactiveFormsModule } from "@angular/forms";
import { ErrorComponent } from './components/error/error.component';
import { SneakerPagePresentationComponent } from './components/sneaker-page-presentation/sneaker-page-presentation.component';
import { SneakerPopularItemComponent } from './components/sneaker-popular-item/sneaker-popular-item.component';
import { SneakerPopularComponent } from './components/sneaker-popular/sneaker-popular.component';
import { SneakerMyPostsComponent } from './components/sneaker-my-posts/sneaker-my-posts.component';
import { SneakerCreatePostComponent } from './components/sneaker-create-post/sneaker-create-post.component';
import { SneakerSubheaderComponent } from './components/sneaker-subheader/sneaker-subheader.component';
import { SneakerAddButtonComponent } from './components/sneaker-add-button/sneaker-add-button.component';
import { SneakerMyCollectionsComponent } from './components/sneaker-my-collections/sneaker-my-collections.component';
import { SneakerCreateCollectionComponent } from './components/sneaker-create-collection/sneaker-create-collection.component';


@NgModule({
  declarations: [
    AppComponent,
    SneakerHeaderComponent,
    SneakerRegistrationComponent,
    SneakerLoginComponent,
    UserProfileComponent,
    SneakerMainComponent,
    SneakerLandingComponent,
    SneakerSideMenuComponent,
    SneakerContentPageComponent,
    SneakerBoxComponent,
    SneakerPostComponent,
    SneakerFavoritesComponent,
    SneakerComponent,
    LoadingComponent,
    ErrorComponent,
    SneakerPagePresentationComponent,
    SneakerPopularItemComponent,
    SneakerPopularComponent,
    SneakerMyPostsComponent,
    SneakerCreatePostComponent,
    SneakerSubheaderComponent,
    SneakerAddButtonComponent,
    SneakerMyCollectionsComponent,
    SneakerCreateCollectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouting,
    SlickCarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: BUCKET, useValue: 'gs://sneakergram-f7a1e.appspot.com/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
