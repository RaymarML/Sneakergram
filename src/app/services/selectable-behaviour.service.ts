import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SelectableBehaviourService {

  selectSneakerInSearch = new Subject();
  selectSneakerForCollection = new BehaviorSubject([]);
  deleteSneakerForCollection = new Subject();

  constructor() { }
}
