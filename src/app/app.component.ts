import { Component, OnInit } from '@angular/core';
import { routingLinks } from './routing/app-routing.module';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Subscribble';
  routingLinks = routingLinks;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        this.setTitle(route.url);
      }
    });
  }

  setTitle(url) {
    this.title = this.routingLinks.find(function(el) {
      return el.path == url;
    }).label
  }

}
