import { Component } from '@angular/core';
import { routingLinks } from './routing/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Subscribble';
  routingLinks = routingLinks;
}
