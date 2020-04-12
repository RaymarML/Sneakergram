import { Component} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sneaker-main',
  templateUrl: './sneaker-main.component.html',
  styleUrls: ['./sneaker-main.component.scss']
})
export class SneakerMainComponent{

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authorizationService.currentUser.subscribe(value => {
      if (value != null){
        this.router.navigate(['/Content/LatestPosts']);
      }
    })
  }

}
