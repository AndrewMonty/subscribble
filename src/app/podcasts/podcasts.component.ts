import { Component, OnInit, ViewChild } from '@angular/core';
import { Podcast } from '../podcast';
import { PodcastService } from '../podcast.service';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
  providers: [PodcastService]
})
export class PodcastsComponent implements OnInit {

  title: string = 'Podcasts';
  display: string = 'list';
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

}
