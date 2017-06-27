import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { PodcastService } from './podcast.service';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './routing/app-routing.module';
import { PodcastTileComponent } from './podcast-tile/podcast-tile.component';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PodcastTileComponent,
    PodcastListComponent,
    PodcastDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    NgxElectronModule
  ],
  providers: [
    PodcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
