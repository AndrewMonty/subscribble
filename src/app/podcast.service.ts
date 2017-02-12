import { Injectable } from '@angular/core';
import { Podcast } from './podcast';
import { PODCASTS } from './mock-podcasts';

@Injectable()
export class PodcastService {

  constructor() { }

  getAll(): Promise<Podcast[]> {
    return Promise.resolve(PODCASTS);
  }

}
