import { Component, OnInit } from '@angular/core';
import { Podcast } from '../podcast';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
  providers: [PodcastService]
})
export class PodcastsComponent implements OnInit {

  podcasts: Podcast[];

  constructor(private podcastService: PodcastService) { }

  ngOnInit(): void {
      this.getPodcasts();
  }

  getPodcasts(): void {
    this.podcastService.getAll().then(podcasts => this.podcasts = podcasts);
  }

}
