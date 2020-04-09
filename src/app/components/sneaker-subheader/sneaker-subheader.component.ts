import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sneaker-subheader',
  templateUrl: './sneaker-subheader.component.html',
  styleUrls: ['./sneaker-subheader.component.css']
})
export class SneakerSubheaderComponent implements OnInit {

  @Input() title:string;
  constructor() { }

  ngOnInit(): void {
  }

}
