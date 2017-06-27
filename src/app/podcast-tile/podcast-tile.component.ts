import { Component, OnInit, Input } from '@angular/core';
import { Podcast } from '../podcast';

@Component({
  selector: 'app-podcast-tile',
  templateUrl: './podcast-tile.component.html',
  styleUrls: ['./podcast-tile.component.scss']
})
export class PodcastTileComponent implements OnInit {

  @Input()
  podcast: Podcast

  ngOnInit() {}

  public getBackgroundStyle(): Object {
    if (this.podcast.artwork == null) {
      return { 'background-color': 'blue' };
    } else {
      return { 'background-image': 'url(' + this.podcast.artwork + ')' };
    }
  }
}
