import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {SneakerLandingComponent} from "../components/sneaker-landing/sneaker-landing.component";
import {SneakerMainComponent} from "../components/sneaker-main/sneaker-main.component";
import {SneakerLoginComponent} from "../components/sneaker-login/sneaker-login.component";
import {SneakerRegistrationComponent} from "../components/sneaker-registration/sneaker-registration.component";
import {UserProfileComponent} from "../components/user-profile/user-profile.component";
import {SneakerFavoritesComponent} from "../components/sneaker-favorites/sneaker-favorites.component";
import {SneakerComponent} from "../components/sneaker/sneaker.component";
import {SneakerContentPageComponent} from "../components/sneaker-content-page/sneaker-content-page.component";
import {SneakerPopularComponent} from "../components/sneaker-popular/sneaker-popular.component";
import {SneakerPostComponent} from "../components/sneaker-post/sneaker-post.component";

const appRoutes: Routes = [
  { path: '', component: SneakerLandingComponent, children: [
      {path: '', component: SneakerMainComponent},
      {path: 'Access/Login', component: SneakerLoginComponent },
      {path: 'Access/Registration', component: SneakerRegistrationComponent },
      {path: 'Access/Account', component: UserProfileComponent }]
  },
  { path: 'Content', component: SneakerContentPageComponent, children: [
      {path: 'Más-Popular', component: SneakerPopularComponent},
      {path: 'Últimos-Posts', component: SneakerPostComponent},
      {path: 'Favoritos', component: SneakerFavoritesComponent},
    ]},
  { path: 'Favorites', component: SneakerFavoritesComponent},
  { path: 'Sneaker/:id', component: SneakerComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ]
})

export class AppRouting {}
