import { Podcast } from '../podcast';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss'],
  providers: [PodcastService]
})
export class PodcastDetailComponent implements OnInit {

  podcast: Podcast;

  constructor(
    private podcastService: PodcastService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.podcastService.get(this.route.snapshot.params['id'])
      .then(podcast => this.setPodcast(podcast));
  }

  setPodcast(podcast): void {
    this.podcast = podcast;
    console.log(this.podcast);
  }

}
