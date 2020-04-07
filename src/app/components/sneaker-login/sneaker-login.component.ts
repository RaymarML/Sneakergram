import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../../services/authorization.service";
import { UserInterface } from "../../model/UserInterface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sneaker-login',
  templateUrl: './sneaker-login.component.html',
  styleUrls: ['./sneaker-login.component.scss']
})
export class SneakerLoginComponent implements OnInit {

  loginForm: FormGroup;
  showError: boolean = false;
  message: string = "Usuario no válido";

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {

  }

  onSubmit(form: UserInterface){
    this.authorizationService.sigInWithEmailAndPassword(form).subscribe(
      value => {
        this.router.navigate(['LatestPost']);
      },error => {
        this.showError = true;
      }
    );
  }

}

