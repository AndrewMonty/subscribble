import { Injectable } from '@angular/core';
import { Podcast } from './podcast';
import { PODCASTS } from './mock-podcasts';

@Injectable()
export class PodcastService {

  constructor() { }

  getAll(): Promise<Podcast[]> {
    return Promise.resolve(PODCASTS);
  }

  get(id): Promise<Podcast> {
    let podcast = null;
    for (let i = 0; i < PODCASTS.length; i++) {
      if(PODCASTS[i].id == id) {
        podcast = PODCASTS[i];
      }
    }
    return Promise.resolve(podcast);
  }

}
