import { Component, OnInit, NgZone } from '@angular/core';
import { Podcast } from '../podcast';
import { PodcastService } from '../podcast.service';
import { SidenavService } from '../sidenav.service';
import { DisplayOption, displayOptions } from './display-option';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss'],
  providers: [PodcastService]
})
export class PodcastListComponent implements OnInit {

  title: string = 'Podcasts';
  display: any = 'shit5';
  displayOptions: DisplayOption[] = displayOptions;
  columns: number = 3;
  podcasts: Podcast[];

  constructor(
    private ngZone:          NgZone,
    private podcastService:  PodcastService,
    private sidenavService:  SidenavService,
    private electronService: ElectronService
  ) { }

  ngOnInit(): void {
    this.getPodcasts();
    this.electronService.ipcRenderer.on('store.get', (event, arg) => {
      this.ngZone.run(() => {
        this.display = arg
      })
    })
    this.electronService.ipcRenderer.send('store.get', 'config.display')
  }

  getPodcasts(): void {
    this.podcastService.getAll().then(podcasts => this.podcasts = podcasts);
  }

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }

  setDefaultDisplay(event, displayOption: DisplayOption) {
    this.display = displayOption;
    console.log(this.display);
  }

  setDisplay(displayOption: DisplayOption): void {
    this.electronService.ipcRenderer.send('store.set', {
      config: { display: displayOption }
    })
    this.display = displayOption;
  }

  setTileSize(value: number): void {
    this.columns = value;
  }

}
