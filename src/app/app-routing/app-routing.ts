import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {SneakerLandingComponent} from "../components/sneaker-landing/sneaker-landing.component";
import {SneakerMainComponent} from "../components/sneaker-main/sneaker-main.component";
import {SneakerLoginComponent} from "../components/sneaker-login/sneaker-login.component";
import {UserProfileComponent} from "../components/user-profile/user-profile.component";
import {SneakerFavoritesComponent} from "../components/sneaker-favorites/sneaker-favorites.component";
import {SneakerComponent} from "../components/sneaker/sneaker.component";
import {SneakerContentPageComponent} from "../components/sneaker-content-page/sneaker-content-page.component";
import {SneakerPopularComponent} from "../components/sneaker-popular/sneaker-popular.component";
import {SneakerPostComponent} from "../components/sneaker-post/sneaker-post.component";
import {SneakerRegisterComponent} from "../components/sneaker-register/sneaker-register.component";
import {SneakerSearchComponent} from "../components/sneaker-search/sneaker-search.component";
import {SneakerMyPostsComponent} from "../components/sneaker-my-posts/sneaker-my-posts.component";
import {SneakerMyCollectionsComponent} from "../components/sneaker-my-collections/sneaker-my-collections.component";
import {SneakerCreatePostComponent} from "../components/sneaker-create-post/sneaker-create-post.component";
import {SneakerCreateCollectionComponent} from "../components/sneaker-create-collection/sneaker-create-collection.component";

import {AuthGuard} from "../guards/auth.guard";
import {PagePresentationComponent} from "../components/page-presentation/page-presentation.component";
import {SneakerLastCollectionsComponent} from "../components/sneaker-last-collections/sneaker-last-collections.component";
import {SneakerFavoriteCollectionsComponent} from "../components/sneaker-favorite-collections/sneaker-favorite-collections.component";
import {SneakerCollectionInfoComponent} from "../components/sneaker-collection-info/sneaker-collection-info.component";
import {SneakerEditCollectionComponent} from "../components/sneaker-edit-collection/sneaker-edit-collection.component";
import {SneakerEditPostComponent} from "../components/sneaker-edit-post/sneaker-edit-post.component";

const appRoutes: Routes = [
  { path: '', component: PagePresentationComponent},
  { path: 'Access', component: SneakerLandingComponent, children: [
      {path: '', component: SneakerMainComponent},
      {path: 'Login', component: SneakerLoginComponent },
      {path: 'Registration', component: SneakerRegisterComponent },
      {path: 'Account', component: UserProfileComponent, canActivate: [AuthGuard]}]
  },
  { path: 'Content', component: SneakerContentPageComponent, children: [
      {path: 'Trending', component: SneakerPopularComponent},
      {path: 'LatestCollection', component: SneakerLastCollectionsComponent},
      {path: 'LatestPosts', component: SneakerPostComponent},
      {path: 'Favoritos', component: SneakerFavoritesComponent},
      {path: 'Search/:selectOption', component: SneakerSearchComponent},
      {path: 'My-Posts', component: SneakerMyPostsComponent, canActivate: [AuthGuard]},
      {path: 'My-Collections', component: SneakerMyCollectionsComponent, canActivate: [AuthGuard]},
      {path: 'Favorite-Collections', component: SneakerFavoriteCollectionsComponent, canActivate: [AuthGuard]},
    ]},
  {path: 'Content/My-Posts/Create-Post', component: SneakerCreatePostComponent, canActivate: [AuthGuard]},
  {path: 'Content/My-Posts/Edit-Post/:id', component: SneakerEditPostComponent, canActivate: [AuthGuard]},
  {path: 'Content/My-Collections/Create-Collection', component: SneakerCreateCollectionComponent, canActivate: [AuthGuard]},
  {path: 'Content/My-Collections/Edit-Collection/:id', component: SneakerEditCollectionComponent, canActivate: [AuthGuard]},
  {path: 'CollectionInfo/:id', component: SneakerCollectionInfoComponent, canActivate: [AuthGuard]},
  {path: 'Sneaker/:id', component: SneakerComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ]
})

export class AppRouting {}
