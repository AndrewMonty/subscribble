import { Injectable, NgZone } from '@angular/core';
import { Podcast } from './podcast';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class PodcastService {

  private podcasts: Podcast[];
  private ipc;

  constructor(
    private ngZone: NgZone,
    private electronService: ElectronService
  ) { 
    this.ipc = this.electronService.ipcRenderer;
  }

  public getAll(): Promise<Podcast[]> {
    return new Promise<Podcast[]>(resolve => {
      this.ipc.on('podcasts.all', (event, data) => {
        this.podcasts = data;
        resolve(this.podcasts);
      });
      this.ipc.send('podcasts.all');
    });
  }

  public get(id): Promise<Podcast> {
    let podcast = null;
    console.log(this.podcasts);
    for (let i = 0; i < this.podcasts.length; i++) {
      if(this.podcasts[i].id == id) {
        podcast = this.podcasts[i];
      }
    }
    return Promise.resolve(podcast);
  }

}
