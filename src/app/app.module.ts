import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { routing } from './app.routes';

import { StoriesComponent } from './stories/stories.component';
import { EventsComponent } from './events/events.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsListComponent } from './events-list/events-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    EventsComponent,
    FriendsComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    EventsListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
