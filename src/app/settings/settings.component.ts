import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  title: string = 'Settings';

  constructor( private sidenavService: SidenavService ) {}

  ngOnInit() {}

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }

}
