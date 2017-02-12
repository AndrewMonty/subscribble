import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';
import { SubscriptionsComponent } from '../subscriptions/subscriptions.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'subscriptions'
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'subscriptions',
        component: SubscriptionsComponent
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
export class AppRouterModule {}

export const routingComponents = [SettingsComponent, SubscriptionsComponent]
