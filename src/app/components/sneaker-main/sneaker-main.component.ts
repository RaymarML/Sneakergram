import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sneaker-main',
  templateUrl: './sneaker-main.component.html',
  styleUrls: ['./sneaker-main.component.css']
})
export class SneakerMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

}
