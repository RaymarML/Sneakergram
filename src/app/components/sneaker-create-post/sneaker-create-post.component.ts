import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {SneakersService} from "../../services/sneakers.service";
import {SneakerInterface} from "../../model/SneakerInterface";
import {async} from "@angular/core/testing";
import {AuthorizationService} from "../../services/authorization.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sneaker-create-post',
  templateUrl: './sneaker-create-post.component.html',
  styleUrls: ['./sneaker-create-post.component.scss']
})
export class SneakerCreatePostComponent implements OnInit {

  title: string = "Crear publicación";
  sneakerForm: FormGroup;
  message: string = "El formulario no es válido.";
  showError: boolean = false;

  fileList: File[];
  startUploadFiles: boolean = false;

  //https://www.regextester.com/94502
  regexUrl: string = "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$"
  private sneaker: SneakerInterface;

  constructor(
    private sneakersService: SneakersService,
    private router: Router
  ) {
    this.sneakerForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.maxLength(60)]),
      shopUrl: new FormControl("", [Validators.required, Validators.pattern(this.regexUrl)]),
      description: new FormControl("", [Validators.required, Validators.maxLength(255)]),
      imageUrl: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addSneaker(sneakerForm: FormGroup) {
    if (sneakerForm.valid) {
      const {name , description, shopUrl}= sneakerForm.value

      this.sneaker = {
        name: name.toLocaleLowerCase(),
        shopUrl: shopUrl,
        description: description,
        uid: '',
        imageUrl: [],
        created_at: Date.now(),
        likes: []
      }

      this.startUploadFiles = true;
    }
  }

  manageFile(files: FileList) {
    this.fileList = [files.item(0), files.item(1), files.item(2)].filter(element => element != null);
  }

  addUrl(url: string) {
    this.sneaker.imageUrl.push(url);
    if (this.sneaker.imageUrl.length == this.fileList.length){
      this.sneakersService.createSneaker(this.sneaker).subscribe( value => {
        this.router.navigate(["Content", "LatestPosts"])
      })
    }
  }
}
