import { Component, OnInit } from '@angular/core';
import { Podcast } from '../podcast';
import { PodcastService } from '../podcast.service';
import { SidenavService } from '../sidenav.service';
import { DisplayOption, displayOptions } from './display-option';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss'],
  providers: [PodcastService]
})
export class PodcastListComponent implements OnInit {

  title: string = 'Podcasts';
  display: DisplayOption = displayOptions[2];
  displayOptions: DisplayOption[] = displayOptions;
  columns: number = 3;
  podcasts: Podcast[];

  constructor(
    private podcastService: PodcastService,
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
    this.getPodcasts();
  }

  getPodcasts(): void {
    this.podcastService.getAll().then(podcasts => this.podcasts = podcasts);
  }

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }

  setDisplay(displayOption: DisplayOption): void {
    this.display = displayOption;
  }

  setTileSize(value: number): void {
    this.columns = value;
  }

}