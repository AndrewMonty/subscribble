import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';
import { PodcastListComponent } from '../podcast-list/podcast-list.component';
import { PodcastDetailComponent } from '../podcast-detail/podcast-detail.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'podcasts'
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'podcasts',
        component: PodcastListComponent
    },
    {
        path: 'podcasts/:id',
        component: PodcastDetailComponent
    }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}

export const routingComponents = [SettingsComponent, PodcastListComponent]
export const routingLinks = [
    {
        path: '/settings',
        label: 'Settings',
        icon: 'settings'
    },
    {
        path: '/podcasts',
        label: 'Podcasts',
        icon: 'dashboard'
    }
]
