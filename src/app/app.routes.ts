import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { FriendsComponent } from './friends/friends.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
    { path: "", component: StoriesComponent },
    { path: "events", component: EventsComponent },
    { path: "friends", component: FriendsComponent },
    { path: "profile", component: ProfileComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);