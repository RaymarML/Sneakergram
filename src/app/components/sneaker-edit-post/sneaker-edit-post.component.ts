import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorizationService} from "../../services/authorization.service";
import {SneakersService} from "../../services/sneakers.service";
import {SneakerInterface} from "../../model/SneakerInterface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sneaker-edit-post',
  templateUrl: './sneaker-edit-post.component.html',
  styleUrls: ['./sneaker-edit-post.component.scss']
})
export class SneakerEditPostComponent implements OnInit {

  sneaker: SneakerInterface;
  sneakerForm: FormGroup;
  regexUrl: string = "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$"
  title: string = "Editar Post";

  constructor(
    private activatedRoute: ActivatedRoute,
    private authorizationService: AuthorizationService,
    private sneakersService: SneakersService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sneakersService.getSneaker(params['id']).subscribe(sneaker => {

        if (!sneaker.name || sneaker.uid != this.authorizationService.getUid()){
          this.route.navigate(['/Content', 'My-Posts']);
        }

        this.sneaker = sneaker;
        this.sneakerForm = new FormGroup({
          name: new FormControl(this.sneaker.name, [Validators.required, Validators.maxLength(60)]),
          shopUrl: new FormControl(this.sneaker.shopUrl, [Validators.required, Validators.pattern(this.regexUrl)]),
          description: new FormControl(this.sneaker.description, [Validators.required, Validators.maxLength(255)]),
        });
      })
    })

  }

  editSneaker(sneakerForm: FormGroup) {
    if(sneakerForm.valid){
      const {name, description, shopUrl} = sneakerForm.value;
      this.sneaker.name = name;
      this.sneaker.shopUrl = shopUrl;
      this.sneaker.description = description;
      this.sneakersService.updateSneaker(this.sneaker).subscribe(value => {
        Swal.fire({
          title: "Zapatilla actualizada",
          timer: 1500,
          timerProgressBar: true,
          icon: 'success'
        })
        this.route.navigate(['Sneaker',this.sneaker.id]);
      });
    }

  }
}
