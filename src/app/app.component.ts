import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { SidenavService } from './sidenav.service';
import { routingLinks } from './routing/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SidenavService]
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;
  title = 'Subscribble';
  subscription: Subscription;
  routingLinks: Array<Object>;

  constructor( private sidenavService: SidenavService ) {
    this.routingLinks = routingLinks;
  }

  ngOnInit() {
    this.subscription = this.sidenavService.toggleObservable
      .subscribe(value => this.toggleNav(value))
  }

  toggleNav(really): void {
    if (really) {
      this.sidenav.toggle()
    }
  }

}
