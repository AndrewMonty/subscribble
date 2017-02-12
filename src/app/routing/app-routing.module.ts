import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';
import { PodcastsComponent } from '../podcasts/podcasts.component';

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
        component: PodcastsComponent
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

export const routingComponents = [SettingsComponent, PodcastsComponent]
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
