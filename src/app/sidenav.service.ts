import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidenavService {

  private toggleSource: BehaviorSubject<boolean>;
  public toggleObservable;

  constructor() {
    // initiate with a value of false so we can tell in the subscriber
    // if it was the initial call or not
    this.toggleSource = new BehaviorSubject(false);
    this.toggleObservable = this.toggleSource.asObservable();
  }

  toggle() {
    // all subsequent updates are value of true so we know to actually
    // do the sidenav toggling
    this.toggleSource.next(true)
  }

}
