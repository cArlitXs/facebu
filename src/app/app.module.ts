import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

import { routing } from "./app.routes";

import { StoriesComponent } from "./stories/stories.component";
import { EventsComponent } from "./events/events.component";
import { FriendsComponent } from "./friends/friends.component";
import { ProfileComponent } from "./profile/profile.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { AssistService } from "./services/assist.service";
import { EventService } from "./services/event.service";
import { FriendsListComponent } from "./friends-list/friends-list.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    EventsComponent,
    FriendsComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    EventsListComponent,
    FriendsListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    Ng2SearchPipeModule
  ],
  providers: [EventService, AssistService],
  bootstrap: [AppComponent]
})
export class AppModule {}
