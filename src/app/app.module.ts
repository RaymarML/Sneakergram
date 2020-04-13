import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SneakerHeaderComponent } from './components/sneaker-header/sneaker-header.component';
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

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorComponent } from './components/error/error.component';
import { SneakerPagePresentationComponent } from './components/sneaker-page-presentation/sneaker-page-presentation.component';
import { SneakerPopularItemComponent } from './components/sneaker-popular-item/sneaker-popular-item.component';
import { SneakerPopularComponent } from './components/sneaker-popular/sneaker-popular.component';
import { SneakerRegisterComponent } from './components/sneaker-register/sneaker-register.component';
import { SneakerSearchComponent } from './components/sneaker-search/sneaker-search.component';
import { SneakerAddButtonComponent } from './components/sneaker-add-button/sneaker-add-button.component';
import { SneakerCreateCollectionComponent } from './components/sneaker-create-collection/sneaker-create-collection.component';
import { SneakerCreatePostComponent } from './components/sneaker-create-post/sneaker-create-post.component';
import { SneakerMyCollectionsComponent } from './components/sneaker-my-collections/sneaker-my-collections.component';
import { SneakerMyPostsComponent } from './components/sneaker-my-posts/sneaker-my-posts.component';
import { SneakerSubheaderComponent } from './components/sneaker-subheader/sneaker-subheader.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SneakerCommentsComponent } from './components/sneaker-comments/sneaker-comments.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { SneakerMenuComponent } from './components/sneaker-menu/sneaker-menu.component';
import { PagePresentationComponent } from './components/page-presentation/page-presentation.component';
import { SneakerDeleteButtonComponent } from './components/sneaker-delete-button/sneaker-delete-button.component';
import { SneakerEditButtonComponent } from './components/sneaker-edit-button/sneaker-edit-button.component';
import { SneakerCollectionComponent } from './components/sneaker-collection/sneaker-collection.component';
import { SneakerUserPostComponent } from './components/sneaker-user-post/sneaker-user-post.component';


@NgModule({
  declarations: [
    AppComponent,
    SneakerHeaderComponent,
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
    SneakerRegisterComponent,
    SneakerSearchComponent,
    SneakerAddButtonComponent,
    SneakerCreateCollectionComponent,
    SneakerCreatePostComponent,
    SneakerMyCollectionsComponent,
    SneakerMyPostsComponent,
    SneakerSubheaderComponent,
    FileUploadComponent,
    SneakerCommentsComponent,
    CreateCommentComponent,
    SneakerMenuComponent,
    PagePresentationComponent,
    SneakerDeleteButtonComponent,
    SneakerEditButtonComponent,
    SneakerCollectionComponent,
    SneakerUserPostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouting,
    SlickCarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: BUCKET, useValue: 'gs://sneakergram-f7a1e.appspot.com/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
